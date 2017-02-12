const LocationService = require('LocationService');

export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export const toggleLayer = (layerId) => {
  return {
    type: 'TOGGLE_LAYER',
    layerId
  };
};

export const setLayerData = (layerId, data) => {
  return {
    type: 'SET_LAYER_DATA',
    layerId,
    data
  };
};

export const setCenter = (lat, lon, zoom) => {
  return {
    type: 'SET_CENTER',
    lat,
    lon,
    zoom
  };
};

export const toggleLayerSelector = () => {
  return {
    type: 'TOGGLE_LAYER_SELECTOR'
  };
};

export const startToggleLayer = (layerId) => {
  return (dispatch, getState) => {
    const layer = getState().layers[layerId];
    if(layer && (!layer.data || layer.data.length === 0)) {
      const locationServicePromise = LocationService.getGeoJsonDataBySubject(layerId);
      return locationServicePromise.then((response)=> {
        // getState().setState({locationData: response.features});
        if(response && response.features) {
          dispatch(setLayerData(layerId, response.features));
          dispatch(toggleLayer(layerId));
        }
      }, function (errorMessage) {
        console.log(errorMessage);
      });
    } else {
      return dispatch(toggleLayer(layerId));
    }
  };
};
