/* global module*/
/* eslint-env jasmine*/

const expect = require('expect');
const actions = require('actions');

describe('actions', () => {
  it('should generate SET_CENTER action', () => {
    const action = {
      type: 'SET_CENTER',
      lat: 1,
      lon: 2,
      zoom: 3
    };

    const res = actions.setCenter(action.lat, action.lon, action.zoom);

    expect(res).toEqual(action);
  });
  it('should generate SET_LAYER_DATA action', () => {
    const action = {
      type: 'SET_LAYER_DATA',
      layerId: 1,
      data: [{pepe: 'pepe'}]
    };

    const res = actions.setLayerData(action.layerId, action.data);

    expect(res).toEqual(action);
  });
  it('should generate SET_SEARCH_TEXT action', ()=> {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    const res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });
  it('should generate toggle layer action', ()=> {
    const action = {
      type: 'TOGGLE_LAYER',
      layerId: 'schools'
    };

    const res = actions.toggleLayer(action.layerId);

    expect(res).toEqual(action);
  });
});
