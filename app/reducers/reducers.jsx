import {createGeoJsonLayer} from 'reducersUtils';


export const showPopupPoiDataReducer = (state = {}, action) => {
  switch(action.type) {
  case 'SET_SHOW_POPUP_POI_DATA':
    return action.data;
  default:
    return state;
  }
};

export const locateUserPositionReducer = (state = false, action) => {
  switch(action.type) {
  case 'LOCATE_USER_POSITION':
    return true;
  case 'DISABLE_LOCATE_USER_POSITION':
    return false;
  default:
    return state;
  }
};
export const modalReducer = (state = false, action) => {
  switch(action.type) {
  case 'SHOW_MODAL':
    return true;
  case 'HIDE_MODAL':
    return false;
  default:
    return state;
  }
};

export const loadingReducer = (state = false, action) => {
  switch(action.type) {
  case 'SHOW_LOADING':
    return true;
  case 'HIDE_LOADING':
    return false;
  default:
    return state;
  }
};


export const modalMessageReducer = (state = '', action) => {
  switch(action.type) {
  case 'SET_MODAL_MESSAGE_TEXT':
    return action.modalMessageText;
  default:
    return state;
  }
};

export const searchTextReducer = (state = '', action) => {
  switch(action.type) {
  case 'SET_SEARCH_TEXT':
    return action.searchText;
  default:
    return state;
  }
};

export const poilistsReducer = (state={}, action) => {
  let listkey = action.listkey;
  let data = action.data;
  let res;

  switch (action.type) {
    case 'TOGGLE_POI_LIST':
      res = {
        ...state,
        [listkey]: {
          ...state[listkey],
          show: (state[listkey])? !state[listkey].show : true
        }
      };
      return res;
    case 'SET_POI_LIST_DATA':
      res = {
        ...state,
        [listkey]: {
          ...state[listkey],
          data: data,
          leafleftLayer: createGeoJsonLayer(listkey, data)
        }
      };
      return res;
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

export const toggleFullScreenReducer = (state='', action) => {
  switch (action.type) {
  case 'TOGGLE_FULL_SCREEN':
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

export const flyToPointReducer = (state = {}, action) => {
  switch(action.type) {
  case 'REMOVE_FLYTO_POINT':
    return null;
  case 'SET_FLYTO_POINT':
    return {
      lat: action.lat,
      lon: action.lon,
      zoom: action.zoom
    };
  default:
    return state;
  }
};

export const fitToBoundsReducer = (state = false, action) => {
  switch(action.type) {
  case 'REMOVE_FIT_TO_BOUNDS':
    return false;
  case 'SET_FIT_TO_BOUNDS':
    return true;
  default:
    return state;
  }
};
