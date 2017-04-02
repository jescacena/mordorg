const React = require('react');
const {connect} = require('react-redux');
const LocationService = require('LocationService');
const MapLayerUtils = require('MapLayerUtils');
const actions = require('actions');
import {CUSTOM_LAYER_ICONS} from 'constants';
import { Map, Marker, Popup, TileLayer, GeoJSON, ScaleControl } from 'react-leaflet';
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

  componentWillMount() {
    let {dispatch} = this.props;
    // const defaultLayer = 'schools';
    //
    // dispatch(actions.startToggleLayer(defaultLayer));
  }

  componentDidUpdate() {
    if(this.refs.map && this.refs.map.leafletElement) {
      let {flyToPoint, layers, fitToBounds,
        fullScreenMode, showPopupPoiData, locateUserPosition, dispatch} = this.props;

      this.refs.map.leafletElement._layersMaxZoom = 17;


      MapLayerUtils.addActiveLayers(layers, fitToBounds, this.refs.map.leafletElement);

      console.log('JESSSSS this.refs.map.leafletElement', this.refs.map.leafletElement);

       if(fitToBounds) {
        // Reset fly to point
        setTimeout(()=> {
          dispatch(actions.removeFitToBounds());
        }, 2000);
      }

      if(flyToPoint) {
        console.log('MapLayer componentWillUpdate flyToPoint', flyToPoint);
        MapLayerUtils.flyTo(flyToPoint, this.refs.map.leafletElement,showPopupPoiData);
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
      if(!this.refs.map.leafletElement._controlCorners.bottomleft.firstChild) {
        L.control.scale({
          position: 'bottomleft',
          imperial: false
        }).addTo(this.refs.map.leafletElement);
      }

      if(locateUserPosition) {
        var leafletMap = this.refs.map.leafletElement;
        let PersonIcon = L.Icon.extend({
           options: {
                 iconUrl: 'img/people-new-2.png',
                 iconSize: [28, 28]
                //  shadowUrl: 'my-icon-shadow.png',
           }
        });
        const personIcon = new PersonIcon();

        leafletMap.locate({setView: true, maxZoom: 16});

        leafletMap.on('locationfound', function(e) {
            if(this.userMarker) {
              leafletMap.removeLayer(this.userMarker);
            }
            this.userMarker = L.marker(e.latlng, {icon: personIcon});
            this.userMarker.addTo(leafletMap);
            dispatch(actions.disableLocateUserPosition());
        });
        this.refs.map.leafletElement.on('locationerror', function(e) {
            console.log(e);
        });
      }

    }
  }

  render() {
    console.log('MapLayer props', this.props);
    let {center} = this.props;
    let position = [center.lat, center.lon];
    let zoom = center.zoom;

    // Tile sources
    // url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    //http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}
    //https://a.tiles.mapbox.com/v3/mapbox.world-bright/{z}/{x}/{y}.png
    //http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png
    //http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png

    const map = (
        <Map ref="map" className="ccm-maplayer" center={position} zoom={zoom}>
          <TileLayer
            detectRetina='true'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
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
    zoom: 16
  }
};

MapLayer.propTypes = {
  center: React.PropTypes.object,
  flyToPoint: React.PropTypes.object,
  showPopupPoiData: React.PropTypes.object,
  fitToBounds: React.PropTypes.bool,
  fullScreenMode: React.PropTypes.bool,
  locateUserPosition: React.PropTypes.bool,
  layers: React.PropTypes.object
};

export default connect(
  (state) => {
    return {
      center: state.center,
      flyToPoint: state.flyToPoint,
      fitToBounds: state.fitToBounds,
      layers: state.layers,
      fullScreenMode: state.fullScreenMode,
      showPopupPoiData: state.showPopupPoiData,
      locateUserPosition: state.locateUserPosition
    };
  }
)(MapLayer);
