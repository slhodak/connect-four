import React from 'react';
import Board from './board.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.height = 6;
    this.width = 7;
    this.state = {};

    this.addTokenToColumn = this.addTokenToColumn.bind(this);
    this.componentWillMount = this.componentWillMount.bind(this);
  }
  // Model Functions
  componentWillMount() {
    let board = [];
    for (var i = 0; i < this.width; i++) {
      board.push([]);
    }
    this.setState({
      board: board
    }, this.registerPlayers);
  }
  registerPlayers() {
    let playerOne = window.prompt('Who will be player one?') || 'red';
    let playerTwo = window.prompt('Who will be player two?') || 'blue';
    this.setState({
      turn: playerOne,
      playerOne: playerOne,
      playerTwo: playerTwo
    });
  }
  addTokenToColumn(e) {
    console.log(this.state.board[e.currentTarget.id]);
    let board = this.state.board;
    if (board[e.currentTarget.id].length < this.height) {
      board[e.currentTarget.id].push(this.state.turn.split('')[0].toUpperCase());
      this.setState({
        board: board,
        turn: this.state.turn === this.state.playerOne ? this.state.playerTwo : this.state.playerOne
      });
    }
  }
  checkVerticalVictory() {
    //  check if a column has four consecutive tokens of same player

  }
  checkHorizontalVictory() {

  }
  checkDiagonalVictory() {

  }
  checkForTies() {

  }
  // Controller Functions


  // View Function
  render() {
    return(
      <div>
        <h1>Connect Four</h1>
        <Board board={this.state.board} 
          height={this.height} 
          dropToken={this.addTokenToColumn}/>
      </div>
    )
  }
};

export default Game;