var React = require('react');
var ReactDOM = require('react-dom');

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';


var MapLayer = React.createClass({
  getDefaultProps: function () {
    return {
      center: {
        address: "Hello",
        lat: 40.7410,
        lon: -4.0574
      }
    };
  },
  render: function() {

    const position = [this.props.center.lat, this.props.center.lon];
    const map = (
      <Map className="ccm-maplayer" center={position} zoom={13}>
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

    // return (
    //   <div className="ccm-maplayer">
    //     <h3>Layer</h3>
    //     <p>{this.props.layersSerialized}</p>
    //     <div id="mapid"></div>
    //   </div>
    // );
  }
});

module.exports = MapLayer;
