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
    LocationService.getGeoJsonDataBySubject('public_transports').then(function (response) {
      that.setState({locationData: response.features});
    }, function (errorMessage) {
      console.log(errorMessage);
    });
  }
  componentWillMount() {
    this.loadLocationData();
  }

  render() {
    let {center, layers} = this.props;
    let position = [center.lat, center.lon];
    let zoom = center.zoom;

    const map = (
      <Map className="ccm-maplayer" center={position} zoom={zoom}>
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
          </Popup>
        </Marker>

        <GeoJSON data={this.state.locationData} />
      </Map>
    );

    return map;
  }
}

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
