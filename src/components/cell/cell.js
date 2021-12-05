import React, { Component, useEffect, useLayoutEffect } from "react";
import "./cell.css";
import { useDispatch } from "react-redux";
import * as actions from "../../actions";

/* const getRandom = () => {
  const min = -100;
  const max = 100;
  return Math.floor(Math.random() * (max - min)) + min;
}; */

const getColor = (value) => {
  if (value > 5) {
    return `rgb(65, ${188 - value}, 156)`;
  }
  
  if (value < -5) {
    return `rgb(${191 + value}, 11, 27)`;
  }
  
  return 'rgb(21, 24, 32)';
};


const Cell = ({number}) => {

  return (
    <div  style={{backgroundColor: getColor(number)}}>
      <span className="number">{number}</span>
    </div>
  )
};


export default Cell;