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
