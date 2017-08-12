const React = require('react');
const {connect} = require('react-redux');
const LocationService = require('LocationService');
const GeometryService = require('GeometryService');
const $ = require('jQuery');
const MapLayerUtils = require('MapLayerUtils');
const actions = require('actions');
import {CUSTOM_LAYER_ICONS} from 'constants';
import { Map, Marker, Popup, TileLayer, GeoJSON, ScaleControl, ZoomControl } from 'react-leaflet';
const screenfull = require('screenfull');


export class MapLayer extends React.Component {

  constructor(props) {
    super(props);
    this.userMarker = null;
    this.state = {
      locationData: {
        type: 'Feature',
        properties: {
          test: 'jeje'
        },
        geometry: {
          type: 'Point',
          coordinates: [
            75.5859375,
            61.938950426660604
          ]
        }
      },
      center: {
        address: 'Hello',
        lat: 40.7410,
        lon: -4.0574,
        zoom: 14
      }
    };
  }

  componentDidMount() {
    let {dispatch, path} = this.props;
    let poikey = null;
    let listkey = null;
    let layerid = null;
    let areaId = null;
    let lat = null;
    let lng = null;

    console.log('JESS MapLayer path', path);

    if(path.indexOf('/layer/')!==-1) {
      const tokens = path.split('/');
      if(tokens[2]){
        layerid = tokens[2];
        dispatch(actions.showLoading());
        dispatch(actions.startToggleLayer(layerid));
      }
    } else if(path.indexOf('/poi/')!==-1) {
      const tokens = path.split('/');
      if(tokens[2] && tokens[3]){
        poikey = tokens[3];
        layerid = tokens[2];
        dispatch(actions.showLoading());
        dispatch(actions.startViewPOI(layerid, poikey));
      }
    } else if(path.indexOf('/poilist/')!==-1) {
      const tokens = path.split('/');
      if(tokens[2]){
        listkey = tokens[2];
        dispatch(actions.showLoading());
        dispatch(actions.startViewPoiList(listkey));
      }
    } else if(path.indexOf('/area/')!==-1) {
      const tokens = path.split('/');
      if(tokens[2]){
        areaId = tokens[2];
        dispatch(actions.showLoading());
        dispatch(actions.startViewArea(areaId));
      }
    } else if(path.indexOf('/locate-address-in-area/')!==-1) {
      const tokens = path.split('/');
      if(tokens[2]){
        areaId = tokens[2];
        console.log('JESSSS locate-address-in-area-->', areaId);

        dispatch(actions.showLoading());
        dispatch(actions.setLocateAddressInAreaAreaId(areaId));
        dispatch(actions.startViewArea(areaId));
        dispatch(actions.showLocateAddresInAreaForm());

      }

    } else if(path.indexOf('/point-in-area/')!==-1) {
      const tokens = path.split('/');
      if(tokens[2] && tokens[3] && tokens[4]){
        lat = parseFloat(tokens[2]);
        lng = parseFloat(tokens[3]);
        areaId = tokens[4];
        console.log('JESSSS point-in-area-->', lat,lng,areaId);

        dispatch(actions.showLoading());
        dispatch(actions.startViewArea(areaId,actions.checkPointInPolygon([lat,lng], areaId)));
        dispatch(actions.addMarker(lat,lng));

      }
    } else {
      // const defaultLayer = 'schools';
      // dispatch(actions.startToggleLayer(defaultLayer));
    }

    // console.log('componentDidMountthis.props.invalidate',this.props.invalidate);
    // if(this.props.invalidate && this.refs.map && this.refs.map.leafletElement) {
    //
    //   console.log('componentDidMount FB invalidateSize!!');
    //   this.refs.map.leafletElement.invalidateSize();
    //   // this.props.invalidate = false;
    // }

  }
  // componentWillMount() {
  //   // let {dispatch} = this.props;
  //   // const defaultLayer = 'schools';
  //   //
  //   // dispatch(actions.startToggleLayer(defaultLayer));
  // }
  //
  // componentWillUpdate() {
  // }

  componentDidUpdate() {
    if(this.refs.map && this.refs.map.leafletElement) {
      let map = this.refs.map.leafletElement;

      let {flyToPoint, layers, areas, poilists, fitToBounds,
        fullScreenMode, showPopupPoiData, locateAddressInAreaData, locateUserPosition,
        center, zoom, markers, leafletMap, dispatch} = this.props;

      if(!leafletMap || $.isEmptyObject(leafletMap)) {
        dispatch(actions.setLeafletMapInstance(map));
      }

      map._layersMaxZoom = 17;

      MapLayerUtils.addActivePoiLists(poilists, fitToBounds, map);

      MapLayerUtils.addActiveLayers(layers, fitToBounds, map);

      MapLayerUtils.addActiveAreas(areas, map);

      MapLayerUtils.addMarkers(markers, map);

      // console.log('MapLayer this.refs.map.leafletElement', leafletMap);

      //  if(fitToBounds) {
      //   // Reset fly to point
      //   setTimeout(()=> {
      //     dispatch(actions.removeFitToBounds());
      //   }, 2000);
      // }

      if(flyToPoint) {
        // console.log('MapLayer componentWillUpdate flyToPoint', flyToPoint);
        MapLayerUtils.flyTo(flyToPoint, map, showPopupPoiData, locateAddressInAreaData);
        // Reset fly to point
        setTimeout(()=> {
          dispatch(actions.removeFlyToPoint());
          dispatch(actions.removeShowPopupPoiData());
        }, 5000);
      }

      if(fullScreenMode){
        if (screenfull.enabled) {
            screenfull.request();
        }
      } else {
        screenfull.exit();
      }

      //Scale control
      if(!map._controlCorners.bottomleft.firstChild) {
        L.control.scale({
          position: 'bottomleft',
          imperial: false
        }).addTo(map);
      }

      if(locateUserPosition) {
        let PersonIcon = L.Icon.extend({
           options: {
                 iconUrl: 'img/people-new-3.png',
                 iconSize: [28, 28]
                //  shadowUrl: 'my-icon-shadow.png',
           }
        });
        const personIcon = new PersonIcon();

        map.locate({setView: true, maxZoom: 16});

        map.on('locationfound', function(e) {
            if(this.userMarker) {
              leafletMap.removeLayer(this.userMarker);
            }
            this.userMarker = L.marker(e.latlng, {icon: personIcon});
            this.userMarker.addTo(map);
            dispatch(actions.disableLocateUserPosition());
        });
        leafletMap.on('locationerror', function(e) {
            console.log(e);
            dispatch(actions.disableLocateUserPosition());
            dispatch(actions.setModalMessageText('No se ha podido capturar su ubicación. Es necesario conceder permisos de ubicación.'));
            dispatch(actions.showModal());


        });


      }

      if(zoom && zoom > 0) {
        let position = [center.lat, center.lon];
        map.setView(position, zoom);
      }

    }
  }

  render() {
    // console.log('MapLayer props', this.props);
    let {center} = this.props;
    let position = [center.lat, center.lon];
    let zoom = center.zoom;
    const zoomControl = false;

    // Tile sources
    // url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    //http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}
    //https://a.tiles.mapbox.com/v3/mapbox.world-bright/{z}/{x}/{y}.png
    //http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png
    //http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png

    const map = (
        <Map ref="map" className="ccm-maplayer" center={position} zoom={zoom} zoomControl={zoomControl}>
          <TileLayer
            detectRetina='true'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />

        <ZoomControl position="bottomright"/>

        </Map>
    );

    return map;
  }
}

        // <GeoJSON  data={this.state.locationData} />

MapLayer.defaultProps = {
  center: {
    lat: 40.7410,
    lon: -4.0574,
    zoom: 18
  }
};

MapLayer.propTypes = {
  center: React.PropTypes.object,
  zoom: React.PropTypes.number,
  flyToPoint: React.PropTypes.object,
  showPopupPoiData: React.PropTypes.object,
  locateAddressInAreaData: React.PropTypes.object,
  fitToBounds: React.PropTypes.bool,
  fullScreenMode: React.PropTypes.bool,
  path: React.PropTypes.string,
  locateUserPosition: React.PropTypes.bool,
  poilists: React.PropTypes.object,
  layers: React.PropTypes.object,
  markers: React.PropTypes.array,
  leafletMap: React.PropTypes.object,
  areas: React.PropTypes.object
};

export default connect(
  (state) => {
    return {
      center: state.center,
      zoom: state.zoom,
      flyToPoint: state.flyToPoint,
      fitToBounds: state.fitToBounds,
      layers: state.layers,
      areas: state.areas,
      markers: state.markers,
      poilists: state.poilists,
      fullScreenMode: state.fullScreenMode,
      showPopupPoiData: state.showPopupPoiData,
      locateAddressInAreaData: state.locateAddressInAreaData,
      leafletMap: state.leafletMap,
      locateUserPosition: state.locateUserPosition
    };
  }
)(MapLayer);
