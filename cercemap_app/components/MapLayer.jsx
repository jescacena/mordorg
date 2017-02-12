const React = require('react');
const {connect} = require('react-redux');
const LocationService = require('LocationService');

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
  }

  loadLocationData() {
    let that = this;
    LocationService.getGeoJsonDataBySubject().then(function (response) {
      that.setState({locationData: response.features});
    }, function (errorMessage) {
      console.log(errorMessage);
    });
  }
  componentWillMount() {
    this.loadLocationData();
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

    console.log('JOJOJO--->',this.state.locationData);

    if(this.refs.map && this.refs.map.leafletElement) {
      L.geoJSON(this.state.locationData).addTo(this.refs.map.leafletElement);
    }

    // let el = ReactDOM.findDOMNode(this);
    // const geoJsonObj = $el.find('ccm-searchbox');
    // if(el && this.state.locationData) {
    //   el.forceUpdate();
    // }
    const map = (
      <Map ref="map" className="ccm-maplayer" center={position} zoom={zoom}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>
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
