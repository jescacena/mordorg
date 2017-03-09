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
});
