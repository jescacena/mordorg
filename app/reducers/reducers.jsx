import {createGeoJsonLayer, createGeoJsonAreaLayer, getAreaLayerCenter} from 'reducersUtils';


export const showPopupPoiDataReducer = (state = {}, action) => {
  switch(action.type) {
  case 'SET_SHOW_POPUP_POI_DATA':
    return action.data;
  default:
    return state;
  }
};

export const leafletMapReducer = (state = {}, action) => {
  switch(action.type) {
  case 'SET_LEAFLET_MAP_INSTANCE':
    return action.leafletMapInstance;
  default:
    return state;
  }
};

export const locateAddressInAreaDataReducer = (state = {}, action) => {
  switch(action.type) {
  case 'SET_POPUP_MESSAGE_LAIA_DATA':
    return {
      ...state,
      data: action.data
    };
  case 'SET_LAIA_AREAID':
    return {
      ...state,
      areaId: action.areaId
    };
  case 'SET_LAIA_POINT_FROM':
    return {
      ...state,
      pointFrom: action.pointFrom
    };
  case 'SET_LAIA_POINT_TO':
    return {
      ...state,
      pointTo: action.pointTo
    };
  default:
    return state;
  }
};

export const locateUserPositionInAreaDataReducer = (state = {}, action) => {
  switch(action.type) {
  case 'SET_POPUP_MESSAGE_LUIA_DATA':
    return {
      ...state,
      data: action.data
    };
  case 'SET_LUIA_AREAID':
    return {
      ...state,
      areaId: action.areaId
    };
  case 'SET_LUIA_POINT_FROM':
    return {
      ...state,
      pointFrom: action.pointFrom
    };
  case 'SET_LUIA_POINT_TO':
    return {
      ...state,
      pointTo: action.pointTo
    };
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

export const locateAddressInAreaFormReducer = (state = false, action) => {
  switch(action.type) {
  case 'SHOW_LOCATE_ADDRESS_IN_AREA_FORM':
    return true;
  case 'HIDE_LOCATE_ADDRESS_IN_AREA_FORM':
    return false;
  default:
    return state;
  }
};

export const locateUserPositionInAreaFormReducer = (state = false, action) => {
  switch(action.type) {
  case 'SHOW_LOCATE_USER_POSITION_IN_AREA_FORM':
    return true;
  case 'HIDE_LOCATE_USER_POSITION_IN_AREA_FORM':
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

export const sidePanelScrollTopArrowReducer = (state = false, action) => {
  switch(action.type) {
  case 'SHOW_SIDE_PANEL_TOP_SCROLL_ARROW':
    return true;
  case 'HIDE_SIDE_PANEL_TOP_SCROLL_ARROW':
    return false;
  default:
    return state;
  }
};
export const sidePanelScrollBottomArrowReducer = (state = false, action) => {
  switch(action.type) {
  case 'SHOW_SIDE_PANEL_BOTTOM_SCROLL_ARROW':
    return true;
  case 'HIDE_SIDE_PANEL_BOTTOM_SCROLL_ARROW':
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

export const markerReducer = (state=[], action) => {

  let res;
  switch (action.type) {
  case 'ADD_MARKER':
    res = [...state, [parseFloat(action.lat) , parseFloat(action.lng)]];
    return res;
  case 'REMOVE_MARKER':
    //TODO
    return [];
  default:
    return state;
  }

};

export const areaReducer = (state={}, action) => {
  let areaId = action.areaId;
  let data = action.data;
  let res;

  switch (action.type) {
  case 'TOGGLE_AREA':
    res = {
      ...state,
      [areaId]: {
        ...state[areaId],
        show: (state[areaId])? !state[areaId].show : true
      }
    };
    return res;
  case 'SET_AREA_DATA':
    res = {
      ...state,
      [areaId]: {
        ...state[areaId],
        data: data,
        leafleftLayer: createGeoJsonAreaLayer(data),
        center: getAreaLayerCenter(areaId)
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

export const toggleSideNavReducer = (state='', action) => {
  switch (action.type) {
  case 'TOGGLE_SIDENAV_SELECTOR':
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

export const zoomReducer = (state = 0, action) => {
  switch(action.type) {
  case 'SET_ZOOM':
    return action.zoom;
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
