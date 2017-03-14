
const errorHandler = require('./err-handler')
const { Database } = require('sqlite3').verbose();
const db = new Database('bag-o-loot.sqlite');

module.exports = (name, toy, delivered) => {
  db.run(`INSERT INTO loot VALUES (
    "${name}", "${toy}", "${delivered}")`, errorHandler);
}
