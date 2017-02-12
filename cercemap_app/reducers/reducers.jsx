/* global L */
import {CUSTOM_LAYER_ICONS, POPUP_TEMPLATE} from 'constants';

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


  const onEachFeature = (feature, layer) => {
    if (feature.properties) {
      const context = {
        name: feature.properties.name,
        address: feature.properties.address,
        imageFront: feature.properties.image_front,
        tfnos: feature.properties.tfnos,
        gsvLink: feature.properties.google_streetview_link,
        website: feature.properties.website
      };
      const html = POPUP_TEMPLATE(context);
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
