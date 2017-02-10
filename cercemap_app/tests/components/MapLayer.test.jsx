/* global module*/
/* eslint-env jasmine*/

const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

import {MapLayer} from 'MapLayer';

describe('MapLayer', () => {
  it('it should exist', () => {
    expect(MapLayer).toExist();
  });

  describe('render', () => {
    it('should render div with ccm-maplayer class', () => {
      const domObj = TestUtils.renderIntoDocument(<MapLayer/>);
      const $el = $(ReactDOM.findDOMNode(domObj));
      const result = $el.hasClass('ccm-maplayer');
      expect(result).toBe(true);
    });

    it('should contain a leaflet map inside', ()=> {
      const domObj = TestUtils.renderIntoDocument(<MapLayer/>);
      const $el = $(ReactDOM.findDOMNode(domObj));
      const result = $el.find('.leaflet-pane');
      expect(result.length).toBeGreaterThan(0);
    });
  });
});
