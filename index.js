const express = require("express");
const app = express();
app.use(express.json())

const databse = require('./db');
const db = new databse();


const route = require('./routes/index')
route(app)

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listenting on port ${port}`);
  db.connect().then((err, result) => {
    if (err) throw err;
    console.log("database is connected");
  });
});
