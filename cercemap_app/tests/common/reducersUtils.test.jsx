/* global module*/
/* eslint-env jasmine*/
const expect = require('expect');
require('globalmocks');
// require('LeafletAwesomeMarkers');
const MockData = require('MockData');
const reducersUtils = require('reducersUtils');


describe('reducersUtils', () => {

  it('createGeoJsonLayer returns a geoJson leaflet layer', ()=> {

    // console.log('JESSSS current dir', __dirname);
    // console.log('JESSS createGeoJsonLayer window.L', window.L);

    const result = reducersUtils.createGeoJsonLayer('layerId', MockData.GEOJSON_FEATURE_COLLECTION);

    // console.dir(result,{depth:null});
    // console.log('result : %j', result);
    // console.log('JESSS createGeoJsonLayer result', result);

    expect(result).toNotBe(null);

    //TODO test is in fact a l.GeoJSON object
  });
});
