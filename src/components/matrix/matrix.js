import React, { useState, useMemo, useEffect } from "react";
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

  const checkFilters = (number) => {
    
    if (filtredCell === "all") {
      return true;
    }

    if (filtredCell === "positive") {
      if (number > 0) {
        return true;
      } else {
        return false;
      }
    }

    if (filtredCell === "negative") {
      if (number < 0) {
        return true;
      } else {
        return false;
      }
    }
  };
  
  const createMatrix = (numbers) => {
    //return numbers.map(number => <div className={`row ${checkFilters(number) ? "" : "Cell_valid"}`}><Cell number={number}/></div>;
    return numbers.map((number) => (
      <div className={`cell ${checkFilters(number) ? "" : "cell-valid"}`}>
        {number}
      </div>
    ))
  };

  const handleCell = (e) => {
    let filterName = e.target.value;

    if (filterName === "all") {
      setFiltredCell(filterName);
    }

    if (filterName === "positive") {
      setFiltredCell(filterName);;
    }

    if (filterName === "negative") {
      setFiltredCell(filterName);
    }
  };
  /* const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(actions.all(numbers));
    dispatch(actions.positive(numbers));
    dispatch(actions.negative(numbers));
  });

  const value = useSelector((state) => state.numbers) */
  

  useEffect(() => {
    return numbers.map(number => <Cell number={number} />)
  }, []);
  //numbers.map(number => <div className={`${styles.Cell} ${checkFilters(number) ? "" : styles.Cell_valid}`}>{number}</div>)

  return (
    <React.Fragment>
      <div className="header">Draw table</div>
      <div className="board">
        <div className="row">
          {createMatrix(numbers)}
        </div>
      </div>
      <div className="footer">
        <button value="all" onClick={handleCell}>
          All
        </button>
        <button value="positive" onClick={handleCell}>
          Filter &#62; 0
        </button>
        <button value="negative" onClick={handleCell}>
          Filter &#60; 0
        </button>
      </div>
    </React.Fragment>
  );
};

export default Matrix;
