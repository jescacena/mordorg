/* global module*/
/* eslint-env jasmine*/

require('globalmocks');


const expect = require('expect');
const PlacesService = require('PlacesService');


describe('PlacesService', () => {
  beforeEach(()=> {
  });

  it('should exist', () => {
    expect(PlacesService).toExist();
  });

  //  addPlacesAutoCompleteListener(htmlInputId, handleNewPlaceSelectedFn) {

  it('addPlacesAutoCompleteListener creates a valid listener', () => {
    var result = PlacesService.addPlacesAutoCompleteListener('testHtmlInputId',()=>{});
    expect(result).toNotBe(null);
  });
});
