import * as redux from 'redux';
import thunk from 'redux-thunk';

const {searchTextReducer,
  layerReducer,
  setCenterReducer,
  toggleLayerSelectorReducer,
  toggleSearchboxReducer,
  loadingReducer,
  modalReducer,
  modalMessageReducer,
  fitToBoundsReducer,
  flyToPointReducer} = require('reducers');

export const configure = (initialState = {
  center: {
    address: 'Hello',
    lat: 40.7410,
    lon: -4.0574,
    zoom: 14
  },
  flyToPoint: null,
  showLayerSelector: false,
  showSearchbox: false,
  showModal: false,
  modalMessageText: 'Todas las caras de la verdad',
  layers: {}
}) => {
  const reducer = redux.combineReducers({
    searchText: searchTextReducer,
    layers: layerReducer,
    center: setCenterReducer,
    showLayerSelector: toggleLayerSelectorReducer,
    showSearchbox: toggleSearchboxReducer,
    showLoading: loadingReducer,
    showModal: modalReducer,
    modalMessageText: modalMessageReducer,
    flyToPoint: flyToPointReducer,
    fitToBounds: fitToBoundsReducer
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
