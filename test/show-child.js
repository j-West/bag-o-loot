
const { assert } = require('chai');
const showChild = require('../lib/show-child');

describe('show-child.js', () => {
  it('should return an Array', () => {
    return showChild("Joel")
      .then((row) => {
        assert.isArray(row);
      })
  })
  it('should return an Array of Objects', () => {
    return showChild("Joel")
      .then((row) => {
        assert.isObject(row[0]);
      })
  })
});
