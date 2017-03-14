
const { assert } = require('chai');
const operation = require('../lib/operation');
const add = require('../lib/add');
const remove = require('../lib/remove');
const update = require('../lib/update');


describe('operation.js', () => {

  describe('Add', () => {
    it('should call add()', () => {
      assert.equal(operation(["add", "parker", "ball"]), "expected thing");
    });
  });
  describe('Update', () => {
    it('should call update()', () => {
      assert.equal(operation(["delivered", "suzy"]), "expected thing");
    });
  });
  describe('Remove', () => {
    it('should call remove()', () => {
      assert.equal(operation(["remove", "suzy", "ball"]), "expected thing");
    });
  });
});
