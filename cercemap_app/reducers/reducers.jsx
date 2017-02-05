export const searchTextReducer = (state = '', action) => {
  switch(action.type) {
  case 'SET_SEARCH_TEXT':
    return action.searchText;
  default:
    return state;
  }
};

export const toggleLayerReducer = (state={}, action) => {
  switch (action.type) {
  case 'TOGGLE_LAYER':
    let layerId = action.layerId;
    console.log('JEJE-->layerId',layerId);
    console.log('JIJI-->state',state);

    let res = {
      ...state,
      [layerId]: !state[layerId]
    };
    console.log('JOJO-->res',res);

    return res;
  default:
    return state;

  }
};
