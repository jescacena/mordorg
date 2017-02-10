/* global module*/
/* eslint-env jasmine*/

const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

import SearchBox from 'SearchBox';

describe('SearchBox', () => {
  it('it should exist', () => {
    expect(SearchBox).toExist();
  });

  describe('render', () => {
    it('should render div with ccm-searchbox class', () => {
      const domObj = TestUtils.renderIntoDocument(<SearchBox/>);
      const $el = $(ReactDOM.findDOMNode(domObj));
      const result = $el.hasClass('ccm-searchbox');
      expect(result).toBe(true);
    });
  });
});
