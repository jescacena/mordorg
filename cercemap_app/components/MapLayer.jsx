const React = require('react');
const locationService = require('locationService');

import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';


export class MapLayer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      locationData: {}
    };
  }

  loadLocationData() {
    let that = this;
    locationService.getGeoJsonDataBySubject().then(function (response) {
      that.setState({locationData: response.features});
    }, function (errorMessage) {
      console.log(errorMessage);
    });
  }
  componentWillMount() {
    this.loadLocationData();
  }

  render() {
    const position = [this.props.center.lat, this.props.center.lon];
    const zoom = this.props.center.zoom;

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
    address: 'Hello',
    lat: 40.7410,
    lon: -4.0574,
    zoom: 14
  }
};

MapLayer.propTypes = {
  center: {
    lat: React.PropTypes.number,
    lon: React.PropTypes.number
  }
};

export default MapLayer;
