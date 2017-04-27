/* global L */

export const VERSION_APP = VERSION;
const Promise = require('q').Promise;
export const API_NO_LAYER_DATA_MESSAGE = 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/no_layer_data.json';

export const API_AREA_URLS = {
  SIERRA_GUADARRAMA_LIMITS: 'https://cercemap.org/app/json/limites_parque_nacional_sierra_guadarrama-polygon.json'
};

// [center_lat, center_lng, zoom]
export const AREA_CENTER = {
  SIERRA_GUADARRAMA_LIMITS: [40.80757278825516, -3.961257934570312, 11]
};

export const API_URLS = {
  CERCEPOI_GET_ONE: 'http://jesidea.com/cercepois/wp-json/wp/v2/',
  PUBLIC_TRANSPORTS: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_public_transports.json',
  SCHOOLS: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_schools.json',
  HEALTH: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_health.json',
  FOOD: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_food.json',
  MUNICIPAL_SERVICES: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_muniservice.json',
  CLOTHES: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_clothes.json',
  BAZAARS: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_bazaars.json',
  BANKS: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_banks.json',
  POLICE: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_police.json',
  BAZARES_CHINOS: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_bazares_chinos.json',
  TALLERES_MECANICOS: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_talleres_mecanicos.json',
  FERRETERIAS: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_ferreterias.json',
  FLORISTERIAS: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_floristerias.json',
  FRUTERIAS: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_fruterias.json',
  PESCADERIAS: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_pescaderias.json',
  PANADERIAS: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_panaderias.json',
  CARNICERIAS: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_carnicerias.json',
  SUPERMERCADOS: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_supermercados.json',
  CENTROS_CULTURALES: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_centros_culturales.json',
  ZONAS_INFANTILES: 'https://raw.githubusercontent.com/jescacena/mordorg/master/ccpois2geojson/json/ccpois_zonas_infantiles.json'
};

export const CERCE_CENTER = new global.google.maps.LatLng(40.71863980562837, -4.092063903808594);

export const CERCE_BOUNDS = new global.google.maps.LatLngBounds(
    // new google.maps.LatLng(40, -4),
    // new google.maps.LatLng(40, -3)
    new global.google.maps.LatLng(40.71863980562837, -4.092063903808594),
    new global.google.maps.LatLng(40.79613778833378, -3.980140686035156)
);


//Font awesome icons
export const CUSTOM_SUBTYPE_ICONS = {
  escuela_de_musica: {
    icon: 'music',
    markerColor: 'blue',
    prefix: 'fa'
  },
  guarderia: {
    icon: 'child',
    markerColor: 'blue',
    prefix: 'fa'
  },
  farmacia: {
    icon: 'plus-square',
    markerColor: 'green',
    prefix: 'fa'
  },
  taxi: {
    icon: 'taxi',
    markerColor: 'red',
    prefix: 'fa'
  },
  renfe: {
    icon: 'train',
    markerColor: 'red',
    prefix: 'fa'
  },
  bus: {
    icon: 'bus',
    markerColor: 'red',
    prefix: 'fa'
  },
  centro_salud: {
    icon: 'medkit',
    markerColor: 'green',
    prefix: 'fa'
  },
  zona_infantil: {
    icon: 'child',
    markerColor: 'orange',
    prefix: 'fa'
  },
  punto_limpio: {
    icon: 'recycle',
    markerColor: 'orange',
    prefix: 'fa'
  },
  hospital: {
    icon: 'h-square',
    markerColor: 'green',
    prefix: 'fa'
  },
  biblioteca: {
    icon: 'book',
    markerColor: 'orange',
    prefix: 'fa'
  },
  centro_deportivo: {
    icon: 'building-o',
    markerColor: 'orange',
    prefix: 'fa'
  },
  cuerpo_seguridad: {
    icon: 'shield',
    markerColor: 'orange',
    prefix: 'fa'
  },
  panaderia: {
    icon: 'shopping-basket',
    markerColor: 'cadetblue',
    prefix: 'fa'
  },
  fruteria: {
    icon: 'shopping-basket',
    markerColor: 'cadetblue',
    prefix: 'fa'
  },
  bazar_alimentacion: {
    icon: 'wrench',
    markerColor: 'purple',
    prefix: 'fa'
  },
  taller_mecanico: {
    icon: 'car',
    markerColor: 'purple',
    prefix: 'fa'
  },
  tienda_bicicletas: {
    icon: 'bicycle',
    markerColor: 'purple',
    prefix: 'fa'
  },
  floristeria: {
    icon: 'tree',
    markerColor: 'purple',
    prefix: 'fa'
  },
  jardineria: {
    icon: 'tree',
    markerColor: 'purple',
    prefix: 'fa'
  },
  electrodomesticos: {
    icon: 'bullseye',
    markerColor: 'purple',
    prefix: 'fa'
  },
  mascotas: {
    icon: 'bullseye',
    markerColor: 'purple',
    prefix: 'fa'
  },
  joyeria: {
    icon: 'bullseye',
    markerColor: 'purple',
    prefix: 'fa'
  },
  estanco: {
    icon: 'bullseye',
    markerColor: 'purple',
    prefix: 'fa'
  },
  carniceria: {
    icon: 'shopping-basket',
    markerColor: 'cadetblue',
    prefix: 'fa'
  },
  supermercado: {
    icon: 'shopping-basket',
    markerColor: 'cadetblue',
    prefix: 'fa'
  },
  bazar_alimentacion: {
    icon: 'shopping-basket',
    markerColor: 'cadetblue',
    prefix: 'fa'
  },
  pescaderia: {
    icon: 'shopping-basket',
    markerColor: 'cadetblue',
    prefix: 'fa'
  },
  centro_cultural: {
    icon: 'building-o',
    markerColor: 'orange',
    prefix: 'fa'
  },
  local_municipal: {
    icon: 'building-o',
    markerColor: 'orange',
    prefix: 'fa'
  },
  ferreteria: {
    icon: 'wrench',
    markerColor: 'purple',
    prefix: 'fa'
  },
  papeleria: {
    icon: 'book',
    markerColor: 'purple',
    prefix: 'fa'
  },
  libreria: {
    icon: 'book',
    markerColor: 'purple',
    prefix: 'fa'
  },
  informatica: {
    icon: 'laptop',
    markerColor: 'purple',
    prefix: 'fa'
  },
  bazar: {
    icon: 'bullseye',
    markerColor: 'purple',
    prefix: 'fa'
  },
  bazares_chinos: {
    icon: 'bullseye',
    markerColor: 'purple',
    prefix: 'fa'
  },
  gasolinera: {
    icon: 'tint',
    markerColor: 'purple',
    prefix: 'fa'
  },
  caja_ahorro: {
    icon: 'eur',
    markerColor: 'darkred',
    prefix: 'fa'
  },
  banco: {
    icon: 'eur',
    markerColor: 'darkred',
    prefix: 'fa'
  },
  policia_municipal: {
    icon: 'shield',
    markerColor: 'darkgreen',
    prefix: 'fa'
  },
  guardia_civil: {
    icon: 'shield',
    markerColor: 'darkgreen',
    prefix: 'fa'
  },
  ropa: {
    icon: 'shopping-bag',
    markerColor: 'darkpurple',
    prefix: 'fa'
  },
  complementos: {
    icon: 'shopping-bag',
    markerColor: 'darkpurple',
    prefix: 'fa'
  }




};

export const CUSTOM_LAYER_ICONS = {
  public_transport: {
    icon: 'bus',
    markerColor: 'red',
    prefix: 'fa'
  },
  municipal_services: {
    icon: 'building-o',
    markerColor: 'orange',
    prefix: 'fa'
  },
  schools: {
    icon: 'graduation-cap',
    markerColor: 'blue',
    prefix: 'fa'
  },
  health: {
    icon: 'ambulance',
    markerColor: 'green',
    prefix: 'fa'
  },
  food: {
    icon: 'shopping-cart',
    markerColor: 'cadetblue',
    prefix: 'fa'
  },
  clothes: {
    icon: 'shopping-bag',
    markerColor: 'darkpurple',
    prefix: 'fa'
  },
  bazaars: {
    icon: 'bullseye',
    markerColor: 'purple',
    prefix: 'fa'
  },
  banks: {
    icon: 'eur',
    markerColor: 'darkred',
    prefix: 'fa'
  },
  police: {
    icon: 'shield',
    markerColor: 'darkgreen',
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
export const POPUP_AREA_TEMPLATE = require('../templates/popup-area.handlebars');
export const POPUP_LAIA_TEMPLATE = require('../templates/popup-locate-address-in-area.handlebars');

// API console: https://console.developers.google.com/apis/credentials?project=cerce-api-project&hl=ES
export const GOOGLE_MAP_KEY = 'AIzaSyC4hAxLWQYK86JGwSCI3FB4TiuAGRU-ez4';

export const POPUP_OPTIONS = {
  maxWidth: (window.innerWidth < 700)? '200':'250',
  className: 'ccm-marker-popup',
  // autoPanPadding: (window.innerWidth < 700)? [0, 100] : [100, 180]
  autoPanPaddingTopLeft: (window.innerWidth < 700)? [0, 100] : [100, 180]
};

export const POPUP_LAIA_OPTIONS = {
  maxWidth: (window.innerWidth < 700)? '200':'250',
  className: 'ccm-marker-popup-laia',
  // autoPanPadding: (window.innerWidth < 700)? [0, 100] : [100, 180]
  autoPanPaddingTopLeft: (window.innerWidth < 700)? [0, 100] : [100, 180]
};


// export const googleMapsClient = require('@google/maps').createClient({
//   key: 'AIzaSyC4hAxLWQYK86JGwSCI3FB4TiuAGRU-ez4',
//   Promise: Promise
// });




// Reset market default icons
// delete L.Icon.Default.prototype._getIconUrl;
//
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });
