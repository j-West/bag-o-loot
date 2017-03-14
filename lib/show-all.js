
const errorHandler = require('./err-handler')
const { Database } = require('sqlite3').verbose();
const db = new Database('bag-o-loot.sqlite');


module.exports = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM loot`, (err, rows) => {
      errorHandler(err);
      // console.log("all", rows);
      // rows.forEach(({ delivered }) => {
      //   if(delivered === '1') {
      //     delivered = 'True';
      //   }
      //   else if(delivered === '0') {
      //     delivered = 'False';
      //   }
      // });
      resolve(rows);
    });
  });
};
