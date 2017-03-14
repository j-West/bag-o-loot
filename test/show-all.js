
const { assert } = require('chai');
const showAll = require('../lib/show-all');

describe('show-all.js', () => {
  it('should return an Array', () => {
    return showAll()
      .then((row) => {
        assert.isArray(row);
      })
  })
  it('should return an Array of Objects', () => {
    return showAll()
      .then((row) => {
        assert.isObject(row[0]);
      })
  })
});
