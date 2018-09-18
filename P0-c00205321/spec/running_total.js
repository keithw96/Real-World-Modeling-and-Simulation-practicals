var path = require('path');
var expect = require('chai').expect;

var running_total = require(path.join(__dirname, '..', './running_total.js'));

describe('running_total()', function () {
  'use strict';

  it('exists', function () {
    expect(running_total).to.be.a('function');

  });

  it('does something', function () {
    expect(true).to.equal(false);
  });

  it('does something else', function () {
    expect(true).to.equal(false);
  });

  // Add more assertions here
});
