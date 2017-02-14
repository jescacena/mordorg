import {createGeoJsonLayer} from 'reducersUtils';

export const searchTextReducer = (state = '', action) => {
  switch(action.type) {
  case 'SET_SEARCH_TEXT':
    return action.searchText;
  default:
    return state;
  }
};

export const layerReducer = (state={}, action) => {
  let layerId = action.layerId;
  let data = action.data;
  let res;

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
    res = {
      ...state,
      [layerId]: {
        ...state[layerId],
        data: data,
        leafleftLayer: createGeoJsonLayer(layerId, data)
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

export const toggleSearchboxReducer = (state='', action) => {
  switch (action.type) {
  case 'TOGGLE_SEARCH_BOX':
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
