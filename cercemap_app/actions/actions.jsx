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
    if(!layer || !layer.data || layer.data.length === 0) {
      const locationServicePromise = LocationService.getGeoJsonDataBySubject(layerId);
      return locationServicePromise.then((response)=> {
        // getState().setState({locationData: response.features});
        if(response && !response.no_layer_data && response.features) {
          dispatch(toggleLayer(layerId));
          dispatch(setLayerData(layerId, response.features));
        } else if(response.no_layer_data) {
          console.log(response.no_layer_data);
        }
      }, function (errorMessage) {
        console.log(errorMessage);
      });
    }
    return dispatch(toggleLayer(layerId));
  };
};
