var React = require('react');
var ReactDOM = require('react-dom');

import { Map, Marker, Popup, TileLayer } from 'react-leaflet';


var MapLayer = React.createClass({
  getDefaultProps: function () {
    return {
      center: {
        address: "Hello",
        lat: 424234234.33,
        lon: 424234234.33
      }
    };
  },
  render: function() {

    const position = [51.505, -0.09];
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
