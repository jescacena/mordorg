const React = require('react');
const {connect} = require('react-redux');
const LocationService = require('LocationService');
const actions = require('actions');
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';


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

    // L.Icon.Default.imagePath = '.';
    // OR
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    });

  }

  // loadLocationData() {
  //   let that = this;
  //   LocationService.getGeoJsonDataBySubject().then(function (response) {
  //     that.setState({locationData: response.features});
  //   }, function (errorMessage) {
  //     console.log(errorMessage);
  //   });
  // }
  componentWillMount() {
    let {dispatch} = this.props;
    const defaultLayer = 'schools';

    dispatch(actions.startToggleLayer(defaultLayer));
  }

  componentWillUpdate() {
    // let mountNode = ReactDOM.findDOMNode(this.refs.geojson);
    // let unmount = ReactDOM.unmountComponentAtNode(mountNode);
    //const map = this.refs.map.leafletElement;
    //console.log('JAEEEE-->map',map);

    // debugger;

    //map.flyTo([13.87992, 45.9791], 12);
  }

  render() {
    console.log('MapLayer props', this.props);
    let {center, layers} = this.props;
    let position = [center.lat, center.lon];
    let zoom = center.zoom;

    if(this.refs.map && this.refs.map.leafletElement) {
      let that = this;
      // L.geoJSON().clearLayers();
      Object.keys(layers).forEach(function (layerKey) {
        if(layers[layerKey] && layers[layerKey].leafleftLayer && layers[layerKey].show) {
          layers[layerKey].leafleftLayer.addTo(that.refs.map.leafletElement);
        } else if(layers[layerKey].leafleftLayer && !layers[layerKey].show){
          layers[layerKey].leafleftLayer.remove();
        }
      });


      // debugger;
      // Creates a red marker with the coffee icon
      // //
    }

    // let el = ReactDOM.findDOMNode(this);
    // const geoJsonObj = $el.find('ccm-searchbox');
    // if(el && this.state.locationData) {
    //   el.forceUpdate();
    // }
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
  layers: React.PropTypes.object
};

export default connect(
  (state) => {
    return {
      center: state.center,
      layers: state.layers
    };
  }
)(MapLayer);
