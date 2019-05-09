import React from 'react';
import Column from './column.jsx';

const Board = (props) => {
  return(
    <div id="board">
    {props.board.map((column, index) => {
      return(
        <Column key={index} id={index} 
          dropToken={props.dropToken} 
          cells={column} 
          height={props.height}/>
      )
    })}
    </div>

  )
};


export default Board;