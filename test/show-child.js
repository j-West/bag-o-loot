
const { assert } = require('chai');
const showChild = require('../lib/show-child');

describe('show-child.js', () => {
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
