var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('reducers', ()=>{
  describe('searchTextReducer',()=>{

    it('should set searchText',()=>{
      var action = {
        type:'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      var res = reducers.searchTextReducer(df(''),df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('toggleLayerReducer', () => {
    it('should toggle layer', () => {
        var initialState = {
          pharmacies: true,
          schools: false
        };

        var action = {
          type:'TOGGLE_LAYER',
          layerId:'schools'
        };

        var res = reducers.toggleLayerReducer(df(initialState), df(action));

        expect(res[action.layerId]).toBe(!(initialState[action.layerId]));
    });
  });
});
