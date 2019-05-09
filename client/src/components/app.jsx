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
  }

  render() {
    return(
      <div>
        <h1>This is the app</h1>
        <Board />
      </div>
    )
  }
};

export default App;