
const { assert } = require('chai');
const add = require('../lib/add');
const showChild = require('../lib/show-child');
const remove = require('../lib/remove');

describe('add.js', () => {

  before(() => {
    add("misty", "cat")
  })

  after(() => {
    remove("misty", "cat")
  })

  it('should return the object just inserted', () => {
    return showChild("misty")
      .then((rows) => {
        let row = rows.filter((rows) => {
          return rows.child_toy === "cat"
        });
        console.log(row);
        assert.equal(row[0].child_toy, "cat");
      })
  })
});
