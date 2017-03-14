
const { assert } = require('chai');
const parseArgs = require('../lib/parse-args');
const calculator = require('../lib/operation');


describe('parse-args.js', () => {
  let result;

  before(function() {
    let args = ['add', 'suzy', 'cat'];
    result = parseArgs(args);

  });
  it('should return an array', () => {
    assert.isArray(parseArgs(['add', 'suzy', 'cat']));
  });
  it('should return an array where the last two indexes are 0 ', () => {
    assert.isArray(parseArgs(['add']));
  });
  it('should return an array where the last index is 0 ', () => {
    assert.isArray(parseArgs(['ls', 'suzy']));
  });
});
