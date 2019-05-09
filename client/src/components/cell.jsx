import React from 'react';

const Cell = (props) => {
  return(
    <div className="cell">
      {props.data}
    </div>
  )
};


export default Cell;