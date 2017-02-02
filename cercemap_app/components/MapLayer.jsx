var React = require('react');
var ReactDOM = require('react-dom');
var locationService = require('locationService');

import { Map, Marker, Popup, TileLayer,GeoJSON } from 'react-leaflet';


var MapLayer = React.createClass({
  getDefaultProps: function () {
    return {
      center: {
        address: "Hello",
        lat: 40.7410,
        lon: -4.0574,
        zoom:14
      }
    };
  },
  loadLocationData : function() {
    var that = this;
    locationService.getGeoJsonDataBySubject().then(function (response) {
      console.log("JESSSS-->",response.features);
      that.setState({locationData:response.features});
    }, function (errorMessage) {
        alert(errorMessage);
    });

  },
  getInitialState : function() {
    return {
      locationData : {},
    };
  },
  componentWillMount : function() {
   this.loadLocationData();
  },
  render: function() {

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

        <GeoJSON data={this.state.locationData}></GeoJSON>
      </Map>
    );

    return map;
  }
});

module.exports = MapLayer;
