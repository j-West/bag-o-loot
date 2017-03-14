
const errorHandler = require('./err-handler')
const { Database } = require('sqlite3').verbose();
const db = new Database('bag-o-loot.sqlite');


module.exports = (name) => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM loot WHERE child_name ="${name}"`, (err, rows) => {
      errorHandler(err);
      
      // console.log("child", rows);
      resolve(rows);
    });
  })
};
