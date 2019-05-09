import React from 'react';

const Column = (props) => {
  return(
    <div className="column">
      {props.cells.map((cell, index) => {
        return(
          <div className="cell"></div>
        )
      })}
    </div>

  )
};


export default Column;