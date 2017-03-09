/* global module*/
/* eslint-env jasmine*/

const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

import IconButton from 'IconButton';

describe('IconButton', () => {
  it('it should exist', () => {
    expect(IconButton).toExist();
  });

  describe('render', () => {
    it('should render div with icon-button class', () => {
      const iconButton = TestUtils.renderIntoDocument(<IconButton/>);
      const $el = $(ReactDOM.findDOMNode(iconButton));
      const result = $el.hasClass('icon-button');
      expect(result).toBe(true);
    });
  });
});
