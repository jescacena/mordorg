/* global module*/
/* eslint-env jasmine*/

const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

require('globalmocks');

import {LayerList} from 'LayerList';

describe('LayerList', () => {
  beforeEach(()=> {
  });

  it('it should exist', () => {
    expect(LayerList).toExist();
  });

  describe('render', () => {
    it('should render div with ccm-layer-list class', () => {
      const domObj = TestUtils.renderIntoDocument(<LayerList/>);
      const $el = $(ReactDOM.findDOMNode(domObj));
      const result = $el.hasClass('ccm-layer-list');
      expect(result).toBe(true);
    });
  });
});
