import React from "react";
import "./cell.css";

const getColor = (value) => {
  if (value > 50) {
    return `rgb(21, ${88 + value}, ${56 + value})`;
  }
  if (value > 5) {
    return `rgb(0,${29 + value}, ${24 + value})`;
  }
  
  if (value < -5) {
    return `rgb(${91 - value}, 11, 27)`;
  }
  
  return 'rgb(21, 24, 32)';
};


const Cell = ({number, isValid}) => {
    return (
      <>
      {
        isValid ? <div  className="cell-component" style={{backgroundColor: getColor(number)}}>
        <span className="number">{number}</span>
        </div> :  <div  className="cell-valid"></div>
      }      
      </>     
    )
};


export default Cell;