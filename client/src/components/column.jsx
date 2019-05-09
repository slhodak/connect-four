import React from 'react';
import Cell from './cell.jsx';

const Column = (props)=> {
  const cells = [];
  for (var i = 0; i < props.height; i++) {
    props.cells[i] ? cells.push(props.cells[i]) : cells.push('');
  }
  return(
    <div className="column" id={props.id} onClick={props.dropToken}>
      {cells.map((cell, index) => {
        return(
          <Cell key={index} data={cell}/>
        )
      })}
    </div>
  )
};


export default Column;