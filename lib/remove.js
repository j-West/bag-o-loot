
const errorHandler = require('./err-handler')
const { Database } = require('sqlite3').verbose();
const db = new Database('bag-o-loot.sqlite');

module.exports = (name, toy) => {
  db.run(`DELETE FROM loot WHERE child_name = "${name}" AND child_toy = "${toy}"`, errorHandler);
}
