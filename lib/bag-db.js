
const { Database } = require('sqlite3').verbose();

const db = new Database('bag-o-loot.sqlite');

const errorHandler = err => { if(err) { console.log('Error', err) } };

const addTables = () => {
  db.run(`CREATE TABLE IF NOT EXISTS loot
    (child_name TEXT NOT NULL,
     child_toy TEXT NOT NULL,
     delivered TEXT NOT NULL)`, errorHandler)};

     addTables();
