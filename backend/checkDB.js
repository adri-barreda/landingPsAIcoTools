const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
  db.each("SELECT * FROM submissions", (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row);
  });
});

db.close();
