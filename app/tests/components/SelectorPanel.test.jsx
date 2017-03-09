/* global module*/
/* eslint-env jasmine*/

const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

require('globalmocks');

import {SelectorPanel} from 'SelectorPanel';

describe('SelectorPanel', () => {
  beforeEach(()=> {
  });

  it('it should exist', () => {
    expect(SelectorPanel).toExist();
  });

  describe('render', () => {
    it('should render container with ccm-selector-panel class', () => {
      const selectorPanel = TestUtils.renderIntoDocument(<SelectorPanel/>);
      const $el = $(ReactDOM.findDOMNode(selectorPanel));
      // const objDiv = $el.find('.ccm-selector-panel');
      const result = $el.hasClass('ccm-selector-panel');
      expect(result).toBe(true);
    });
  });
});
