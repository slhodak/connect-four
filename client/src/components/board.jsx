import React from 'react';
import Column from './column.jsx';

const Board = (props) => {
  return(
    <div id="board">
    {props.board.map((column, index) => {
      return(
        <Column key={index} cells={column}/>
      )
    })}
    </div>

  )
};


export default Board;