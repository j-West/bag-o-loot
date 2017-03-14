
const { assert } = require('chai');
const showChild = require('../lib/show-child');
const add = require('../lib/add');
const remove = require('../lib/remove');

describe('show-child.js', () => {

  before(() => {
    add("karyn", "beer");
    add("karyn", "hat");
  })
  after(() => {
    remove("karyn", "beer");
    remove("karyn", "hat");
  })

  it('should return an Array', () => {
    return showChild("karyn")
      .then((row) => {
        assert.isArray(row);
      })
  })
  it('should return an Array of Objects', () => {
    return showChild("karyn")
      .then((row) => {
        assert.isObject(row[0]);
      })
  })
});
