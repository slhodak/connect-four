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
    this.checkEndConditions = this.checkEndConditions.bind(this);
    this.checkVerticalVictory = this.checkVerticalVictory.bind(this);
    this.checkHorizontalVictory = this.checkHorizontalVictory.bind(this);
    this.checkDiagonalVictory = this.checkDiagonalVictory.bind(this);
    this.triggerVictory = this.triggerVictory.bind(this);
    this.postResult = this.postResult.bind(this);
  }
  // Model Functions
  componentWillMount() {
    let board = [];
    for (var i = 0; i < this.width; i++) {
      board.push([]);
    }
    this.setState({
      board: board
    });
    let playerOne = window.prompt('Who will be player one?') || 'red';
    let playerTwo = window.prompt('Who will be player two?') || 'blue';
    this.setState({
      turn: playerOne,
      playerOne: playerOne,
      playerTwo: playerTwo
    });
  }
  addTokenToColumn(e) {
    if (this.state.victor) {
      return;
    }
    let board = this.state.board;
    if (board[e.currentTarget.id].length < this.height) {
      board[e.currentTarget.id].push(this.state.turn);
      this.setState({
        board: board,
        turn: this.state.turn === this.state.playerOne ? this.state.playerTwo : this.state.playerOne,
        currentColumn: e.currentTarget.id
      }, this.checkEndConditions);
    }
  }
  checkEndConditions() {
    this.checkVerticalVictory(this.state.currentColumn);
    this.checkHorizontalVictory();
    this.checkDiagonalVictory();
  }
  checkVerticalVictory(column) {
    column = this.state.board[column];
    let p1consecutive = [];
    let p2consecutive = [];
    for (var i = 0; i < column.length; i++) {
      if (column[i] === this.state.playerOne) {
        p2consecutive = [];
        p1consecutive.push(1);
      } else if (column[i] === this.state.playerTwo) {
        p1consecutive = [];
        p2consecutive.push(1);
      }
    }
    if (p1consecutive.length === 4) {
      this.setState({
        victor: this.state.playerOne
      }, this.triggerVictory);
    } else if (p2consecutive.length === 4) {
      this.setState({
        victor: this.state.playerTwo
      }, this.triggerVictory);
    }
  }
  checkHorizontalVictory() {
  }
  checkDiagonalVictory() {
  }
  checkForTies() {
  }
  triggerVictory() {
    console.log('winner!', this.state.victor);
    this.postResult(this.state.victor);
  }
  postResult(victor) {
    fetch('http://127.0.0.1:3000/victory', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      mode: 'same-origin',
      body: JSON.stringify({victor: victor})
    })
    .then(res => {
      res.text()
        .then(text => {
          this.setState({
            results: text
          });
        })
    })
    .catch(err => {
      console.log(err);
    });
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