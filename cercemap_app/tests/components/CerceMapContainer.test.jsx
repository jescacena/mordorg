var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');

require('globalmocks');


var TestUtils = require('react-addons-test-utils');

var CerceMapContainer = require('CerceMapContainer');

describe('CerceMapContainer' , () => {
  beforeEach(()=> {
  });

  it('it should exist', () => {
    expect(CerceMapContainer).toExist();
  });

  // describe('render', () => {
  //    it('should render Map', () => {
  //      var ccmContainer = TestUtils.renderIntoDocument(<CerceMapContainer/>);
  //      var $el = $(ReactDOM.findDOMNode(ccmContainer));
  //      var objDivMapLayer = $el.find('.ccm-maplayer');
  //      expect(objDivMapLayer).toNotBe(null);
  //    });
  //  });
});
