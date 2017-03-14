
const errorHandler = require('./err-handler')
const { Database } = require('sqlite3').verbose();
const db = new Database('bag-o-loot.sqlite');

module.exports = (name) => {
  db.run(`UPDATE loot SET "delivered" = "1" WHERE child_name="${name}"`, errorHandler);
}
