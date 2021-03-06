/* global module*/
/* eslint-env jasmine*/

require('globalmocks');


const expect = require('expect');
const LocationService = require('LocationService');


describe('LocationService', () => {
  beforeEach(()=> {
  });

  it('it should exist', () => {
    expect(LocationService).toExist();
  });

  describe('Schools layer', () => {
    it('getGeoJsonDataArea for sierra_guadarrama_limits should get valid geojson data', (done) => {
      LocationService.getGeoJsonDataArea('sierra_guadarrama_limits').then((response) => {

        setTimeout(function () {
          expect(response).toNotBe(null);

          //TODO check it is a FeaturesCollection object
          done();
        }, 10);
      });
    });

    it('getGeoJsonDataBySubject for schools should get valid geojson data', (done) => {
      LocationService.getGeoJsonDataBySubject('schools').then((response) => {

        setTimeout(function () {
          expect(response).toNotBe(null);

          //TODO check it is a FeaturesCollection object
          done();
        }, 10);
      });
    });

    it('getCCPoiDataById should get valid geojson data for one ccpoi key', (done) => {
      LocationService.getGeoJsonDataById('school', '58').then((response) => {

        setTimeout(function () {
          expect(response).toNotBe(null);

          //TODO check for any POD field in the response
          done();
        }, 10);
      });
    });
  });
});
