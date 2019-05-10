const Sequelize = require('sequelize');
const pw = require('./db.config.js');

const database = new Sequelize('connectfour', 'macuser', pw, {
  host: 'localhost',
  dialect: 'postgres'
});

const Board = database.define('board', {
  victor: Sequelize.STRING
});

module.exports = { database, Board };