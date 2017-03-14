
const { assert } = require('chai');
const remove = require('../lib/remove');
const showChild = require('../lib/show-child');

describe('remove.js', () => {

  before(() => {
    remove("james", "cat")
  })

  it('should return an empty array', () => {
    return showChild("james")
      .then((rows) => {
        let row = rows.filter((rows) => {
          return rows.child_toy === "cat"
        });
        console.log(row);
        assert.equal(row[0], null);
      })
  })
});
