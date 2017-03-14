
const errorHandler = require('./err-handler')
const { Database } = require('sqlite3').verbose();
const db = new Database('bag-o-loot.sqlite');


module.exports = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM loot ORDER BY "child_name"`, (err, rows) => {
      errorHandler(err);

      // console.log("all", rows);
      resolve(rows);
    });
  })
};
