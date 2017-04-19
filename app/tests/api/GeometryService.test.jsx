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

  describe('closest', () => {
    it('It should have distance at 0 if on path', function() {
      const ll = L.latLng([0, 0]),
          closest = GeometryService.closest(map2, [[-30, -50], [-10, -10], [10, 10], [30, 50]], ll);
      expect(closest.distance).toBe(0);
      expect(ll.toString()).toBe(closest.toString());
    });
  });

  describe('pointInPolygon', () => {
    it('should returns results for a point inside the polygon', function() {
      let gjLayer = L.geoJson(polygonData.features);
      const ll = L.latLng(40.740819175595135, -4.056100845336914),
          result = GeometryService.pointInPolygon(ll,gjLayer);
      expect(result.length).toNotBe(0);
    });

    it('should returns epmty for a point outside of the polygon', function() {
      let gjLayer = L.geoJson(polygonData.features);
      const ll = L.latLng(40.742574997542924, -4.044170379638672),
          result = GeometryService.pointInPolygon(ll, gjLayer);
          expect(result.length).toBe(0);
    });
  });

});
