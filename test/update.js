
const { assert } = require('chai');
const update = require('../lib/update');
const showChild = require('../lib/show-child');
const add = require('../lib/add');
const remove = require('../lib/remove');


describe('update.js', () => {

  before(() => {
    add("mandy", "store")
    update("mandy")
  })
  after(() => {
    remove("mandy", "store")
  })

  it('should return an array', () => {
    return showChild("james")
      .then((rows) => {
        console.log(rows);
        assert.equal(rows[0].delivered, "1");
      })
  })
});
