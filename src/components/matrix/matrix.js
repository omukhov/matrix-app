import React, { useState, useMemo } from "react";
import Cell from "../cell";
import "./matrix.css";

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

  const [filtredName, setFiltredName] = useState("all");

  const checkFilters = (number) => {
    
    if (filtredName === "all") {
      return true;
    }

    if (filtredName === "positive") {
      if (number > 0) {
        return true;
      } else {
        return false;
      }
    }

    if (filtredName === "negative") {
      if (number < 0) {
        return true;
      } else {
        return false;
      }
    }
  };
  
  const createMatrix = (numbers) => {
    return numbers.map((number, index) => (
      <div 
        className={`cell ${checkFilters(number) ? "" : "cell-valid"}`}
        key={index}
      >
        <Cell isValid={checkFilters(number)} number={number}/>
      </div>
    ))
  };

  const handleCell = (e) => {
    let filterName = e.target.value;

    if (filterName === "all") {
      setFiltredName(filterName);
    }

    if (filterName === "positive") {
      setFiltredName(filterName);;
    }

    if (filterName === "negative") {
      setFiltredName(filterName);
    }
  };
  
  return (
    <React.Fragment>
      <div className="header">Draw table</div>
      <div className="board">
        <div className="matrix">
          {createMatrix(numbers)}
        </div>
      </div>
      <div className="footer">
        <button value="positive" className="positive" onClick={handleCell}>
          Filter &#62; 0
        </button>
        <button value="all" className="all" onClick={handleCell}>
          All
        </button>
        <button value="negative" className="negative" onClick={handleCell}>
          Filter &#60; 0
        </button>
      </div>
    </React.Fragment>
  );
};

export default Matrix;
