var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var SelectorPanel = require('SelectorPanel');

describe('SelectorPanel' , () => {
      it('it should exist', () => {
        expect(SelectorPanel).toExist();
      });

      describe('render', () => {
         it('should render main structure', () => {
           var selectorPanel = TestUtils.renderIntoDocument(<SelectorPanel/>);
           var $el = $(ReactDOM.findDOMNode(selectorPanel));
           var objDiv = $el.find('.ccm-selector-panel');
           expect(objDiv).toNotBe(null);
         });
       });
});
