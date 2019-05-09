import React from 'react';
import Cell from './cell.jsx';

const Column = (props) => {
  return(
    <div className="column" id={props.id} onClick={props.dropToken}>
      {props.cells.map((cell, index) => {
        return(
          <Cell key={index} />
        )
      })}
    </div>

  )
};


export default Column;