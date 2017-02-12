const Handlebars = require('handlebars/runtime');

export const searchTextReducer = (state = '', action) => {
  switch(action.type) {
  case 'SET_SEARCH_TEXT':
    return action.searchText;
  default:
    return state;
  }
};

export const toggleLayerReducer = (state={}, action) => {
  let layerId = action.layerId;
  let data = action.data;
  let res;
  const CUSTOM_LAYER_ICONS = {
    'public_transports':{
      icon: 'bus',
      markerColor: 'red',
      prefix: 'fa'
    },
    'schools':{
      icon: 'graduation-cap',
      markerColor: 'blue',
      prefix: 'fa'
    }
  };

  var template = require("../templates/popup.handlebars");

  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
        var context = {name: feature.properties.name};
        var html = template(context);
        layer.bindPopup(html);
        // layer.bindPopup(feature.properties.popupContent);
    }
  };

  switch (action.type) {
  case 'TOGGLE_LAYER':
    res = {
      ...state,
      [layerId]: {
        ...state[layerId],
        show: (state[layerId])? !state[layerId].show : true
      }
    };
    return res;
  case 'SET_LAYER_DATA':
    const icon = L.AwesomeMarkers.icon(CUSTOM_LAYER_ICONS[layerId]);
    res = {
      ...state,
      [layerId]: {
        ...state[layerId],
        data: data,
        leafleftLayer: L.geoJSON(data, {
          pointToLayer: function (geoJsonPoint, latlng) {
            return L.marker(latlng, {icon: icon});
          },
          onEachFeature: onEachFeature
        })
      }
    };
    return res;
  default:
    return state;
  }
};

export const toggleLayerSelectorReducer = (state='', action) => {
  switch (action.type) {
  case 'TOGGLE_LAYER_SELECTOR':
    return !state;
  default:
    return state;

  }
};

export const setCenterReducer = (state = {}, action) => {
  switch(action.type) {
  case 'SET_CENTER':
    return {
      lat: action.lat,
      lon: action.lon,
      zoom: action.zoom
    };
  default:
    return state;
  }
};
