const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../dist')));

const eraseDatabaseOnSync = true;
db.database.sync({ force: eraseDatabaseOnSync }).then(() => {
  app.listen(3000, () => {
    console.log('Listening on port 3000');
  })
});

app.post('/victory', (req, res, next) => {
  console.log(`Handling ${req.method} request`);
  console.log(req.body.victor);
  db.Board.upsert({victor: req.body.victor})
    .then(([model, created]) => {
      res.status(200);
      res.send('nice');
    })
    .catch(err => {
      res.status(500);
      res.send(JSON.stringify(err));
    })
  //  load a victory page with a button to go back to the original
});