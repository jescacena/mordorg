const React = require('react');
import ReactDOM from 'react-dom';
const $ = require('jQuery');
const locationService = require('locationService');

import { Map, Marker, Popup, TileLayer, GeoJSON, LayersControl, FeatureGroup, Circle } from 'react-leaflet';


export class CerceMapContainer2 extends React.Component {

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

  componentDidMount() {
    let $el = $(ReactDOM.findDOMNode(this));
    console.log('componentDidMount', $el);
    
    $('.leaflet-control-container').off();
    $('.leaflet-control-layers-toggle').off();
    $('.leaflet-control-layers').off();
    $('.leaflet-top.leaflet-right').off();


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

        <LayersControl position='topright'>
          <LayersControl.BaseLayer name='OpenStreetMap.BlackAndWhite'>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name='OpenStreetMap.Mapnik'>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay name='Marker with popup'>
            <Marker position={[51.51, -0.06]}>
              <Popup>
                <span>A pretty CSS3 popup. <br/> Easily customizable.</span>
              </Popup>
            </Marker>
          </LayersControl.Overlay>
          <LayersControl.Overlay name='Feature group'>
            <FeatureGroup color='purple'>
              <Popup>
                <span>Popup in FeatureGroup</span>
              </Popup>
              <Circle center={[51.51, -0.06]} radius={200} />
            </FeatureGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </Map>
    );

    return map;
  }
}

CerceMapContainer2.defaultProps = {
  center: {
    address: 'Hello',
    lat: 40.7410,
    lon: -4.0574,
    zoom: 14
  }
};

CerceMapContainer2.propTypes = {
  center: {
    lat: React.PropTypes.number,
    lon: React.PropTypes.number
  }
};

export default CerceMapContainer2;
