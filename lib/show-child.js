
const { Database } = require('sqlite3').verbose();

const db = new Database('bag-o-loot.sqlite');


module.exports = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM loot WHERE child_name ="Joel"`, (err, rows) => {
      if (err) {
        reject(err)
      }
      console.log("rows", rows);
      rows.forEach(({ delivered }) => {
        if(delivered === '1') {
          delivered = 'True';
        }
        else if(delivered === '0') {
          delivered = 'False';
        }
      });
      resolve(rows);
    });
  });
};
