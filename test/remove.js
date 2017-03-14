
const { assert } = require('chai');
const remove = require('../lib/remove');
const add = require('../lib/add');
const showChild = require('../lib/show-child');

describe('remove.js', () => {

  before(() => {
    add("chris", "dog")
    remove("chris", "dog")
  })

  it('should return an empty array', () => {
    return showChild("chris")
      .then((rows) => {
        let row = rows.filter((rows) => {
          return rows.child_toy === "dog"
        });
        console.log(row);
        assert.equal(row[0], null);
      })
  })
});
