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
    console.log('got here');
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
    let victor = this.checkVerticalVictory(this.state.currentColumn) || this.checkHorizontalVictory() || this.checkDiagonalVictory();
    console.log(victor);
    if (victor) {
      this.triggerVictory(victor);
    }
  }
  checkVerticalVictory(column) {
    column = this.state.board[column];
    console.log('column', column);
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
    console.log('consec', p1consecutive);
    if (p1consecutive.length === 4) {
      return this.state.playerOne;
    } else if (p2consecutive.length === 4) {
      return this.state.playerTwo;
    }
  }
  checkHorizontalVictory() {
    
  }
  checkDiagonalVictory() {
    
  }
  checkForTies() {
    
  }
  triggerVictory(victor) {
    this.setState({
      victor: victor
    });
    console.log('winner!', victor);
    // this.postResult(victor);
  }
  postResult(victor) {
    fetch('http://127.0.0.1:3000/victory', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(victor)
    })
    .then(res => {
      console.log(res);
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