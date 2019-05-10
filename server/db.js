const Sequelize = require('sequelize');
//  maybe must be with superuser
const database = new Sequelize('connectfour', 'macuser', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

const Board = database.define('board', {
  victor: Sequelize.STRING
});

module.exports = { database, Board };