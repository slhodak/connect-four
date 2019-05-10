const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
// var template = require('./template.jsx');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../dist')));

//  Set up templating
// app.set('view engine', 'pug');
var template = '<div><h1>Sam is here</h1></div>';

//  Connect to database
const eraseDatabaseOnSync = true;
db.database.sync({ force: eraseDatabaseOnSync }).then(() => {
  app.listen(3000, () => {
    console.log('Listening on port 3000');
  })
});

app.post('/victory', (req, res, next) => {
  console.log(`Handling ${req.method} request`);
  console.log(req.body.victor);
  db.Board.create({victor: req.body.victor})
    .then(board => {
      res.status(200);
      res.redirect(path.resolve(__dirname, 'victory.html'));
    })
    .catch(err => {
      res.status(500);
      console.log('giving err?', err);
      res.send(JSON.stringify(err));
    })
  //  load a victory page with
  //  the list of wins and a
  //  button to go back to the original
});