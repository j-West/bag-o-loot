
const { assert } = require('chai');
const add = require('../lib/add');
const showChild = require('../lib/show-child');

describe('add.js', () => {

  before(() => {
    add("james", "cat")
  })

  it('should return the object just inserted', () => {
    return showChild("james")
      .then((rows) => {
        let row = rows.filter((rows) => {
          return rows.child_toy === "cat"
        });
        console.log(row);
        assert.equal(row[0].child_toy, "cat");
      })
  })
});
