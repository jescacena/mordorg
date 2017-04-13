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

export const togglePoiList = (listkey) => {
  return {
    type: 'TOGGLE_POI_LIST',
    listkey
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
export const setPoiListData = (listkey, data) => {
  return {
    type: 'SET_POI_LIST_DATA',
    listkey,
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

export const locateUserPosition = () => {
  return {
    type: 'LOCATE_USER_POSITION'
  };
};

export const disableLocateUserPosition = () => {
  return {
    type: 'DISABLE_LOCATE_USER_POSITION'
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

export const setShowPopupPoiData = (data) => {
  return {
    type: 'SET_SHOW_POPUP_POI_DATA',
    data: data
  };
};

export const removeShowPopupPoiData = () => {
  return {
    type: 'REMOVE_SHOW_POPUP_POI_DATA'
  };
};


export const startViewPoiList= (listkey) => {
  return (dispatch, getState) => {
    const locationServicePromise = LocationService.getGeoJsonDataListByKey(listkey);
    return locationServicePromise.then((response)=> {
      if(response && !response.no_layer_data && response.features) {
        dispatch(togglePoiList(listkey));
        dispatch(setPoiListData(listkey, response.features));
        dispatch(hideLoading());
        dispatch(setFitToBounds());
      } else if(response.no_layer_data) {
        console.log(response.no_layer_data);
      }
      return;
    });
  };
};

export const startViewPOI= (layerid, poiKey) => {
  return (dispatch, getState) => {
    const locationServicePromise = LocationService.getCCPoiDataById(layerid, poiKey);
    return locationServicePromise.then((response)=> {

      const poiData = {
        type: response.type,
        name: response.nombre,
        address: response.direccion,
        coords: response.latlon,
        imgUrl: response.image_front.guid,
        gsvLink: response.google_streetview_link
      };
      dispatch(setShowPopupPoiData(poiData));
      const point = response.latlon.split(',');
      dispatch(setFlyToPoint(point[0], point[1], 11));
      dispatch(hideLoading());

    });
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
          dispatch(setFitToBounds());
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
