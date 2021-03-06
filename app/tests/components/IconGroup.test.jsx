/* global module*/
/* eslint-env jasmine*/

const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

import {IconGroup} from 'IconGroup';

describe('IconGroup', () => {
  it('it should exist', () => {
    expect(IconGroup).toExist();
  });

  describe('render', () => {
    it('should render div with ccm-icon-group class', () => {
      const domObj = TestUtils.renderIntoDocument(<IconGroup/>);
      const $el = $(ReactDOM.findDOMNode(domObj));
      const result = $el.hasClass('ccm-icon-group');
      expect(result).toBe(true);
    });
  });
});
