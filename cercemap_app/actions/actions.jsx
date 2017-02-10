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
