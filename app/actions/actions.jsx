const LocationService = require('LocationService');

export const setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export const setModalMessageText = (modalMessageText) => {
  return {
    type: 'SET_MODAL_MESSAGE_TEXT',
    modalMessageText
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

export const setFlyToPoint = (lat, lon, zoom) => {
  return {
    type: 'SET_FLYTO_POINT',
    lat,
    lon,
    zoom
  };
};

export const removeFlyToPoint = () => {
  return {
    type: 'REMOVE_FLYTO_POINT'
  };
};

export const setFitToBounds = () => {
  return {
    type: 'SET_FIT_TO_BOUNDS'
  };
};

export const removeFitToBounds = () => {
  return {
    type: 'REMOVE_FIT_TO_BOUNDS'
  };
};

export const toggleLayerSelector = () => {
  return {
    type: 'TOGGLE_LAYER_SELECTOR'
  };
};

export const toggleSearchbox = () => {
  return {
    type: 'TOGGLE_SEARCH_BOX'
  };
};

export const toggleFullScreen = () => {
  return {
    type: 'TOGGLE_FULL_SCREEN'
  };
};

export const showLoading = () => {
  return {
    type: 'SHOW_LOADING'
  };
};

export const hideLoading = () => {
  return {
    type: 'HIDE_LOADING'
  };
};

export const showModal = () => {
  return {
    type: 'SHOW_MODAL'
  };
};

export const hideModal = () => {
  return {
    type: 'HIDE_MODAL'
  };
};


export const startToggleLayer = (layerId) => {
  return (dispatch, getState) => {
    const layer = getState().layers[layerId];
    if(!layer || !layer.data || layer.data.length === 0) {
      const locationServicePromise = LocationService.getGeoJsonDataBySubject(layerId);
      return locationServicePromise.then((response)=> {
        console.log('!!locationServicePromise response-->', response);
        // getState().setState({locationData: response.features});
        if(response && !response.no_layer_data && response.features) {
          dispatch(toggleLayer(layerId));
          dispatch(setLayerData(layerId, response.features));
          dispatch(hideLoading());
        } else if(response.no_layer_data) {
          console.log(response.no_layer_data);
        }
        return;
      }, function (errorMessage) {
        console.log(errorMessage);
      });
    }
    dispatch(hideLoading());
    return dispatch(toggleLayer(layerId));
  };
};
