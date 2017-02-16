/* global L */
const Promise = require('q').Promise;
export const API_NO_LAYER_DATA_MESSAGE = 'https://raw.githubusercontent.com/jescacena/mordorg/master/cercemap_geojson_source/json/no_layer_data.json';

export const API_URLS = {
  PUBLIC_TRANSPORTS: 'https://raw.githubusercontent.com/jescacena/mordorg/master/cercemap_geojson_source/json/ccpois_public_transports.json',
  SCHOOLS: 'https://raw.githubusercontent.com/jescacena/mordorg/master/cercemap_geojson_source/json/ccpois_schools.json',
  HEALTH: 'https://raw.githubusercontent.com/jescacena/mordorg/master/cercemap_geojson_source/json/ccpois_health.json'
};

export const CUSTOM_LAYER_ICONS = {
  public_transports: {
    icon: 'bus',
    markerColor: 'red',
    prefix: 'fa'
  },
  schools: {
    icon: 'graduation-cap',
    markerColor: 'blue',
    prefix: 'fa'
  },
  health: {
    icon: 'medkit',
    markerColor: 'green',
    prefix: 'fa'
  },
  default: {
    icon: 'bullseye',
    markerColor: 'purple',
    prefix: 'fa'
  }
};

/* handlebars templates */
export const POPUP_TEMPLATE = require('../templates/popup.handlebars');

// API console: https://console.developers.google.com/apis/credentials?project=cerce-api-project&hl=ES
export const GOOGLE_MAP_KEY = 'AIzaSyC4hAxLWQYK86JGwSCI3FB4TiuAGRU-ez4';

// export const googleMapsClient = require('@google/maps').createClient({
//   key: 'AIzaSyC4hAxLWQYK86JGwSCI3FB4TiuAGRU-ez4',
//   Promise: Promise
// });




// Reset market default icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
