/* global module, L*/
/* eslint-env jasmine*/

require('globalmocks');


const expect = require('expect');
const GeometryService = require('GeometryService');

describe('GeometryService', () => {
  beforeEach(()=> {
  });

  it('it should exist', () => {
    expect(GeometryService).toExist();
  });

  describe('distance', () => {
    it('should return a valid number', () => {
      const result = GeometryService.distance(map2, L.latLng([10, 5]), L.latLng([10, 0]));
      console.log('distance result-->' ,result);
      expect(result).toBeA('number');
    });
  });

});
