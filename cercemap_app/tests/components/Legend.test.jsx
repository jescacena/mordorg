/* global module*/
/* eslint-env jasmine*/

const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

import Legend from 'Legend';

describe('Legend', () => {
  it('it should exist', () => {
    expect(Legend).toExist();
  });

  describe('render', () => {
    it('should render div with ccm-legend class', () => {
      const domObj = TestUtils.renderIntoDocument(<Legend/>);
      const $el = $(ReactDOM.findDOMNode(domObj));
      const result = $el.hasClass('ccm-legend');
      expect(result).toBe(true);
    });
  });
});
