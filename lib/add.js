
const errorHandler = require('./err-handler')
const { Database } = require('sqlite3').verbose();
const db = new Database('bag-o-loot.sqlite');

module.exports = (name, toy) => {
  db.run(`INSERT INTO loot VALUES (
    "${name}", "${toy}", "0")`, errorHandler);
}
