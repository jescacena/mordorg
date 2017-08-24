import * as redux from 'redux';
import thunk from 'redux-thunk';

const {searchTextReducer,
  zoomReducer,
  markerReducer,
  layerReducer,
  areaReducer,
  poilistsReducer,
  setCenterReducer,
  toggleLayerSelectorReducer,
  toggleSideNavReducer,
  toggleSearchboxReducer,
  toggleFullScreenReducer,
  loadingReducer,
  sidePanelScrollTopArrowReducer,
  sidePanelScrollBottomArrowReducer,
  modalReducer,
  modalMessageReducer,
  fitToBoundsReducer,
  showPopupPoiDataReducer,
  locateAddressInAreaDataReducer,
  locateUserPositionReducer,
  leafletMapReducer,
  locateAddressInAreaFormReducer,
  flyToPointReducer} = require('reducers');

export const configure = (initialState = {
  center: {
    address: 'Hello',
    lat: 40.7410,
    lon: -4.0574,
    zoom: 18
  },
  zoom: 0,
  flyToPoint: null,
  showLayerSelector: false,
  showSideNav: false,
  showSearchbox: false,
  fullScreenMode: false,
  showModal: false,
  showSidePanelTopScrollArrow: false,
  showSidePanelBottomScrollArrow: false,
  showLocateAddressInAreaForm: false,
  locateUserPosition: false,
  modalMessageText: 'Todas las caras de la verdad',
  layers: {},
  leafletMap: {},
  markers: [],
  areas: {},
  poilists: {},
  showPopupPoiData: {},
  locateAddressInAreaData: {}
}) => {
  const reducer = redux.combineReducers({
    zoom: zoomReducer,
    searchText: searchTextReducer,
    layers: layerReducer,
    markers: markerReducer,
    areas: areaReducer,
    leafletMap: leafletMapReducer,
    poilists: poilistsReducer,
    center: setCenterReducer,
    showLayerSelector: toggleLayerSelectorReducer,
    showSideNav: toggleSideNavReducer,
    showSearchbox: toggleSearchboxReducer,
    fullScreenMode: toggleFullScreenReducer,
    showLoading: loadingReducer,
    showSidePanelTopScrollArrow: sidePanelScrollTopArrowReducer,
    showSidePanelBottomScrollArrow: sidePanelScrollBottomArrowReducer,
    showModal: modalReducer,
    modalMessageText: modalMessageReducer,
    flyToPoint: flyToPointReducer,
    showPopupPoiData: showPopupPoiDataReducer,
    locateAddressInAreaData: locateAddressInAreaDataReducer,
    fitToBounds: fitToBoundsReducer,
    locateUserPosition: locateUserPositionReducer,
    showLocateAddressInAreaForm: locateAddressInAreaFormReducer
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
