var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var MemoApp = require('MemoApp');

describe('MemoApp', () => {
  it('should exist', () => {
    expect(MemoApp).toExist();
  });
});
