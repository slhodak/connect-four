const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(3000, () => {console.log('Listening on port 3000')});

app.post('/victory', (req, res, next) => {
  console.log(`Handling ${req.method} request`);

  res.end();
  //  add victor to database
  //  load a victory page with a button to go back to the original
});