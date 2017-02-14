/* global module*/
/* eslint-env jasmine*/

const expect = require('expect');
const df = require('deep-freeze-strict');
const reducers = require('reducers');

describe('reducers', ()=>{
  beforeEach(function () {
    // This will run before any it function.
    // Resetting a global state so the change in this function is testable
    window.L = {
      AwesomeMarkers: {
        icon: function () {}
      },
      geoJSON: function () {}
    };
  });
  describe('searchTextReducer', ()=>{
    it('should set searchText', ()=>{
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      const res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('layerReducer', () => {
    it('should set layer data', () => {
      const initialState = {
        schools: {
          show: false
        }
      };

      const action = {
        type: 'SET_LAYER_DATA',
        layerId: 'schools',
        data: [ {
          'type': 'Feature',
          'properties': {
            'name': 'COLEGIO CONCERTADO “REGINA ASSUMPTA”',
            'type': 'schools',
            'address': 'Calle San Andrés 9',
            'image_front': 'http://jesidea.com/cercepois/wp-content/uploads/2016/08/escuela_regina_asummpta-t.png',
            'tfnos': 'Tfno: 918 520 313  Fax: 918 525 511',
            'google_streetview_link': 'http://bit.ly/2jVqLEr',
            'website': 'http://www.reginaassumpta.es/'
          }
        }]
      };

      const res = reducers.layerReducer(df(initialState), df(action));
      expect(res[action.layerId].data.length).toEqual(1);
      expect(res[action.layerId].leafleftLayer).toNotBe(null);
    });

    it('should toggle layer', () => {
      const initialState = {
        pharmacies: {
          show: true
        },
        schools: {
          show: false
        }
      };

      const action = {
        type: 'TOGGLE_LAYER',
        layerId: 'schools'
      };

      const res = reducers.layerReducer(df(initialState), df(action));

      expect(res[action.layerId].show).toBe(!(initialState[action.layerId].show));
    });
  });
});
