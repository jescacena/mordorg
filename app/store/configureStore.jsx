import * as redux from 'redux';
import thunk from 'redux-thunk';

const {searchTextReducer,
  layerReducer,
  setCenterReducer,
  toggleLayerSelectorReducer,
  toggleSearchboxReducer,
  toggleFullScreenReducer,
  loadingReducer,
  modalReducer,
  modalMessageReducer,
  fitToBoundsReducer,
  showPopupPoiDataReducer,
  locateUserPositionReducer,
  flyToPointReducer} = require('reducers');

export const configure = (initialState = {
  center: {
    address: 'Hello',
    lat: 40.7410,
    lon: -4.0574,
    zoom: 18
  },
  flyToPoint: null,
  showLayerSelector: false,
  showSearchbox: false,
  fullScreenMode: false,
  showModal: false,
  locateUserPosition: false,
  modalMessageText: 'Todas las caras de la verdad',
  layers: {},
  showPopupPoiData: {}
}) => {
  const reducer = redux.combineReducers({
    searchText: searchTextReducer,
    layers: layerReducer,
    center: setCenterReducer,
    showLayerSelector: toggleLayerSelectorReducer,
    showSearchbox: toggleSearchboxReducer,
    fullScreenMode: toggleFullScreenReducer,
    showLoading: loadingReducer,
    showModal: modalReducer,
    modalMessageText: modalMessageReducer,
    flyToPoint: flyToPointReducer,
    showPopupPoiData: showPopupPoiDataReducer,
    fitToBounds: fitToBoundsReducer,
    locateUserPosition: locateUserPositionReducer
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
