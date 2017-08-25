import {AREA_CENTER} from 'constants';

const LocationService = require('LocationService');
const GeometryService = require('GeometryService');
const ReactGA = require('react-ga');

export const showLocateAddresInAreaForm = () => {
  ReactGA.event({
    category: 'LocateAddresInAreaForm',
    action: 'Show'
  });
  return {
    type: 'SHOW_LOCATE_ADDRESS_IN_AREA_FORM'
  };
};

export const hideLocateAddresInAreaForm = () => {
  return {
    type: 'HIDE_LOCATE_ADDRESS_IN_AREA_FORM'
  };
};

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
  ReactGA.event({
    category: 'togglePoiList',
    action: 'toggle',
    label:JSON.stringify(listkey)
  });
  return {
    type: 'TOGGLE_POI_LIST',
    listkey
  };
};

export const toggleLayer = (layerId) => {
  ReactGA.event({
    category: 'toggleLayer',
    action: 'toggle',
    label:JSON.stringify(layerId)
  });
  return {
    type: 'TOGGLE_LAYER',
    layerId
  };
};

export const toggleArea = (areaId) => {
  ReactGA.event({
    category: 'toggleArea',
    action: 'toggle',
    label:JSON.stringify(areaId)
  });
  return {
    type: 'TOGGLE_AREA',
    areaId
  };
};

export const setLayerData = (layerId, data) => {
  return {
    type: 'SET_LAYER_DATA',
    layerId,
    data
  };
};
export const setAreaData = (areaId, data) => {
  return {
    type: 'SET_AREA_DATA',
    areaId,
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

export const setZoom = (zoom) => {
  return {
    type: 'SET_ZOOM',
    zoom
  };
};

export const addMarker = (lat, lng) => {
  return {
    type: 'ADD_MARKER',
    lat,
    lng
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
  ReactGA.event({
    category: 'locateUserPosition',
    action: 'locate'
  });
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
  ReactGA.event({
    category: 'toggleLayerSelector',
    action: 'toggle'
  });
  return {
    type: 'TOGGLE_LAYER_SELECTOR'
  };
};

export const toggleSideNav = () => {
  ReactGA.event({
    category: 'toggleSideNav',
    action: 'toggle'
  });
  return {
    type: 'TOGGLE_SIDENAV_SELECTOR'
  };
};

export const toggleSearchbox = () => {
  return {
    type: 'TOGGLE_SEARCH_BOX'
  };
};

export const toggleFullScreen = () => {
  ReactGA.event({
    category: 'toggleFullScreen',
    action: 'toggle'
  });
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

export const showSidePanelTopScrollArrow = () => {
  return {
    type: 'SHOW_SIDE_PANEL_TOP_SCROLL_ARROW'
  };
};

export const hideSidePanelTopScrollArrow = () => {
  return {
    type: 'HIDE_SIDE_PANEL_TOP_SCROLL_ARROW'
  };
};

export const showSidePanelBottomScrollArrow = () => {
  return {
    type: 'SHOW_SIDE_PANEL_BOTTOM_SCROLL_ARROW'
  };
};

export const hideSidePanelBottomScrollArrow = () => {
  return {
    type: 'HIDE_SIDE_PANEL_BOTTOM_SCROLL_ARROW'
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

export const setLeafletMapInstance = (leafletMapInstance) => {
  return {
    type: 'SET_LEAFLET_MAP_INSTANCE',
    leafletMapInstance: leafletMapInstance
  };
};

export const setPopupMessageLocateAddressInAreaData = (data) => {
  ReactGA.event({
    category: 'setPopupMessageLocateAddressInAreaData',
    action: 'set',
    label:JSON.stringify(data)
  });
  return {
    type: 'SET_POPUP_MESSAGE_LAIA_DATA',
    data: data
  };
};

export const setLocateAddressInAreaAreaId = (areaId) => {
  ReactGA.event({
    category: 'setLocateAddressInAreaAreaId',
    action: 'set',
    label:JSON.stringify(areaId)
  });
  return {
    type: 'SET_LAIA_AREAID',
    areaId: areaId
  };
};

export const setLocateAddressInAreaPointFrom = (pointFrom) => {
  return {
    type: 'SET_LAIA_POINT_FROM',
    areaId: pointFrom
  };
};

export const setLocateAddressInAreaPointTo = (pointTo) => {
  return {
    type: 'SET_LAIA_POINT_TO',
    areaId: pointTo
  };
};

export const setShowPopupPoiData = (data) => {
  ReactGA.event({
    category: 'setShowPopupPoiData',
    action: 'set',
    label:JSON.stringify(data)
  });
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

export const fetchClosestPointToPolygon = (latlng, areaId) => {
  return (dispatch, getState) => {
    //TODO
  };
}

export const checkPointInPolygon = (latlng, areaId) => {
  ReactGA.event({
    category: 'checkPointInPolygon',
    action: 'check',
    label:JSON.stringify(areaId)
  });
  return (dispatch, getState) => {
    const polygon = getState().areas[areaId];
      const ll = L.latLng(latlng[0],latlng[1]);
      // const plainPolygonData = MapLayerUtils.getPolygon(areas.sierra_guadarrama_limits.data);
      // console.log("JESSSS EOOOO plainPolygonData---->", JSON.stringify(plainPolygonData));
      console.log("JESSSS checkPointInPolygon polygon---->", polygon);

      let gjLayer = L.geoJson(polygon.data.features);
      // let result = GeometryService.pointInPolygon(ll, gjLayer);
      let result = GeometryService.pointInPolygon(ll, gjLayer);

      console.log("JESSSS checkPointInPolygon result---->", result);
  };
};

export const startViewPoiList= (listkey) => {
  ReactGA.event({
    category: 'startViewPoiList',
    action: 'start',
    label:JSON.stringify(listkey)
  });
  return (dispatch, getState) => {
    const locationServicePromise = LocationService.getGeoJsonDataListByKey(listkey);
    return locationServicePromise.then((response)=> {
      if(response && !response.no_layer_data && response.features) {
        dispatch(togglePoiList(listkey));
        dispatch(setPoiListData(listkey, response.features));
        dispatch(hideLoading());
        dispatch(setFitToBounds());
        if(!getState().showSideNav) {
          dispatch(toggleSideNav());
        }

      } else if(response.no_layer_data) {
        console.log(response.no_layer_data);
      }
      return;
    });
  };
};
export const startViewArea= (areaId, postAction) => {
  ReactGA.event({
    category: 'startViewArea',
    action: 'start',
    label:JSON.stringify(areaId)
  });
  return (dispatch, getState) => {
    const locationServicePromise = LocationService.getGeoJsonDataArea(areaId);
    return locationServicePromise.then((response)=> {
      console.log('JESSS startViewArea response',response);
      dispatch(setAreaData(areaId,response));
      dispatch(toggleArea(areaId));
      const center = AREA_CENTER[areaId.toUpperCase()];
      dispatch(setCenter(center[0], center[1], center[2]));
      if(postAction) {
        dispatch(postAction);
      }
      dispatch(hideLoading());
    });
  };
};


export const startViewPOI= (layerid, poiKey) => {
  ReactGA.event({
    category: 'startViewPOI',
    action: 'start',
    label:JSON.stringify(layerid) + '-' + JSON.stringify(poiKey)
  });
  return (dispatch, getState) => {
    const locationServicePromise = LocationService.getGeoJsonDataById(layerid, poiKey);
    return locationServicePromise.then((response)=> {

      const poiData = {
        type: response.properties.type,
        name: response.properties.name,
        address: response.properties.address,
        tfnos: response.properties.tfnos,
        website: response.properties.website,
        coords: response.geometry.coordinates[1] + ',' + response.geometry.coordinates[0],
        imgUrl: response.properties.image_front_for_facebook_app,
        gsvLink: response.properties.google_streetview_link,
        navLink: 'https://www.google.es/maps/dir/Current+Location/'+response.geometry.coordinates[1] + ',' + response.geometry.coordinates[0],

      };
      dispatch(setShowPopupPoiData(poiData));
      dispatch(removeFitToBounds());
      dispatch(setFlyToPoint(response.geometry.coordinates[1], response.geometry.coordinates[0], 11));
      dispatch(hideLoading());

    });
  };
};

export const startToggleLayer = (layerId) => {
  ReactGA.event({
    category: 'startToggleLayer',
    action: 'start',
    label:JSON.stringify(layerId)
  });
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
          dispatch(toggleLayerSelector());
          if(!getState().showSideNav) {
            dispatch(toggleSideNav());
          }
          setTimeout(function () {
            const layerHtmlElement = document.getElementById('#pl_'+layerId);
            const poiListHtmlElement = document.getElementById('poilist-scrolling-div');
            if(layerHtmlElement && poiListHtmlElement) {
              poiListHtmlElement.scrollTop = layerHtmlElement.offsetTop;
            }
          }, 10);
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
