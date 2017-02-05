var expect = require('expect');
var actions = require('actions');

describe('actions', () => {
  it('should generate search text action', ()=> {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };

    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });
  it('should generate toggle layer action', ()=> {
    var action = {
      type: 'TOGGLE_LAYER',
      layerId: 'schools'
    };

    var res = actions.toggleLayer(action.layerId);

    expect(res).toEqual(action);
  });
});
