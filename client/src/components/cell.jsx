import React from 'react';

const Cell = (props) => {
  return(
    <div className={`cell ${props.data}`}>
      <p>{props.data}</p>
    </div>
  )
};


export default Cell;