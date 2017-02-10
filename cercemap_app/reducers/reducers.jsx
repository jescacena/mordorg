export const searchTextReducer = (state = '', action) => {
  switch(action.type) {
  case 'SET_SEARCH_TEXT':
    return action.searchText;
  default:
    return state;
  }
};

export const toggleLayerReducer = (state={}, action) => {
  switch (action.type) {
  case 'TOGGLE_LAYER':
    let layerId = action.layerId;
    let res = {
      ...state,
      [layerId]: !state[layerId]
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
