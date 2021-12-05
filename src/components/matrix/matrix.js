import React, {useState, useMemo, useEffect} from "react";
import Cell from "../cell";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as actions from "../../actions";

import "./matrix.css";

/* const createMatrix = (numbers) => {
  let board = [];
  let count = 0;
  for (let i = 0; i < 13; i++) {
    let row = [];
    for (let j = 0; j < 13; j++) {
      row.push(<Cell number={numbers[count]} key={i + j}/>);
      count++;
    }
    board.push(<div className="row" key={"row" + i}>{row}</div>); 
  }
  return board;
}; */


/* const createMatrix = (numbers) => {
  //return numbers.map(number => <div className={`row ${checkFilters(number) ? "" : "Cell_valid"}`}><Cell number={number}/></div>;
  return numbers.map((number) => <Cell number={number}/>);
}; */

const Matrix = () => {

  const numbers = useMemo(() => {
    const min = -100;
    const max = 100;
    let arrayNumbers = [];
    for (let i = 0; i < 169; i++) {
      arrayNumbers.push(Math.floor(Math.random() * (max - min)) + min);
    }
    return arrayNumbers;
  }, []);

  const [filtredCell, setFiltredCell] = useState(numbers);

  const handleCell = (e) => {
    let filterName = e.target.value;

    if (filterName === "all") {
      //setFiltredCell(numbers);

    }

    if (filterName === "positive") {

      //setFiltredCell(numbers.filter(number => number > 0));
    }

    if (filterName === "negative") {

      //setFiltredCell(numbers.filter(number => number < 0));
    }
  };
  /* const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(actions.all(numbers));
    dispatch(actions.positive(numbers));
    dispatch(actions.negative(numbers));
  });

  const value = useSelector((state) => state.numbers)
  console.log(value) */
  const checkFilters = (e, number) => {
    let filterName = e.target.value;

    /* if (number > 0) {
      console.log('true');
      return true;
      
    } 
    console.log('false');
      return false;
     */
    if (filterName === "all") {
      if (number) {
        return true;
      }
    }

    if (filterName === "positive") {
      if (number > 0) {
        return true;
      }
    }

    if (filterName === "positive") {
      if (number < 0) {
        return true;
      }
    }

  };

  //numbers.map(number => <div className={`${styles.Cell} ${checkFilters(number) ? "" : styles.Cell_valid}`}>{number}</div>) 

  return (
    <React.Fragment>
        <div className="header">
            Draw table
        </div>
        <div className="board">
            <div className="row">
              {
                numbers.map(number => <div className={`cell ${checkFilters(number) ? "cell" : "cell-valid"}`}>{number}</div>) 
                //numbers.map((number) => <Cell className={`cell ${checkFilters(number) ? "" : "cell-valid"}`} number={number} />)
              }
            </div>
        </div>
        <div className="footer">
          <button value="all" onClick={checkFilters}>All</button>
          <button value="positive" onClick={checkFilters}>Filter &#62; 0</button>
          <button value="negative" onClick={checkFilters}>Filter &#60; 0</button>
        </div>
    </React.Fragment>
  )
}

export default Matrix;

