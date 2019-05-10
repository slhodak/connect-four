const Sequelize = require('sequelize');
//  maybe must be with superuser
const database = new Sequelize('connectfour', 'macuser', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

const Board = database.define('board', {
  victor: Sequelize.STRING
});

//  need to export board too?

module.exports = { database, Board };