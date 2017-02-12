import * as redux from 'redux';
import thunk from 'redux-thunk';

const {searchTextReducer, toggleLayerReducer, setCenterReducer, toggleLayerSelectorReducer} = require('reducers');

export const configure = (initialState = {
  center: {
    address: 'Hello',
    lat: 40.7410,
    lon: -4.0574,
    zoom: 14
  },
  showLayerSelector: false,
  layers: {}
}) => {
  const reducer = redux.combineReducers({
    searchText: searchTextReducer,
    layers: toggleLayerReducer,
    center: setCenterReducer,
    showLayerSelector: toggleLayerSelectorReducer
  });

  const store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
