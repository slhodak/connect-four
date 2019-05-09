import React from 'react';
import Cell from './cell.jsx';

const Column = (props) => {
  return(
    <div className="column">
      {props.cells.map((cell, index) => {
        return(
          <Cell key={index} />
        )
      })}
    </div>

  )
};


export default Column;