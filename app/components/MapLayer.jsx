const React = require('react');
const {connect} = require('react-redux');
const LocationService = require('LocationService');
const MapLayerUtils = require('MapLayerUtils');
const actions = require('actions');
import {CUSTOM_LAYER_ICONS} from 'constants';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
const screenfull = require('screenfull');


export class MapLayer extends React.Component {

  constructor(props) {
    super(props);
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
      let {flyToPoint, layers, fitToBounds, fullScreenMode, showPopupPoiData, dispatch} = this.props;

      MapLayerUtils.addActiveLayers(layers, fitToBounds, this.refs.map.leafletElement);

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
    }
  }

  render() {
    console.log('MapLayer props', this.props);
    let {center} = this.props;
    let position = [center.lat, center.lon];
    let zoom = center.zoom;

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
    zoom: 14
  }
};

MapLayer.propTypes = {
  center: React.PropTypes.object,
  flyToPoint: React.PropTypes.object,
  showPopupPoiData: React.PropTypes.object,
  fitToBounds: React.PropTypes.bool,
  fullScreenMode: React.PropTypes.bool,
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
      showPopupPoiData: state.showPopupPoiData
    };
  }
)(MapLayer);
