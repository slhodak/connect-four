import React from 'react';
import Board from './board.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        // each array is a column. 7 wide, 6 high
        // each item is a cell
        // columns listed here left to right
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', ''],
        ['', '', '', '', '', '']
      ]
    };

    this.addTokenToColumn = this.addTokenToColumn.bind(this);
  }
  // Model Functions
  addTokenToColumn(e) {
    // act on board column determined by e
    console.log(e.currentTarget);
  }

  // Controller Functions


  // View Function
  render() {
    return(
      <div>
        <h1>Connect Four</h1>
        <Board board={this.state.board} dropToken={this.addTokenToColumn}/>
      </div>
    )
  }
};

export default App;