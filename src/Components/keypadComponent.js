import React from "react";

const KeypadComponent = (props) => {
  return (
    // Keypad container
    <div className="keypad">
      {/* Clear */}
      <button className="oval-button" value="" onClick={props.clearFunction}>
        Clear
      </button>
      {/* Delete */}
      <button
        id="delete-button"
        className="round-button"
        onClick={props.deleteLast}
      >
        Del
      </button>
      {/* Divide */}
      <button
        className="round-button"
        value="/"
        onClick={() => props.updateCalc("/")}
      >
        ÷
      </button>
      {/* 7 */}
      <button
        className="round-button number-button"
        value="7"
        onClick={() => props.updateCalc("7")}
      >
        7
      </button>
      {/* 8 */}
      <button
        className="round-button number-button"
        value="8"
        onClick={() => props.updateCalc("8")}
      >
        8
      </button>
      {/* 9 */}
      <button
        className="round-button number-button"
        value="9"
        onClick={() => props.updateCalc("9")}
      >
        9
      </button>
      {/* Multiply */}
      <button
        className="round-button"
        value="*"
        onClick={() => props.updateCalc("*")}
      >
        x
      </button>
      {/* 4 */}
      <button
        className="round-button number-button"
        value="4"
        onClick={() => props.updateCalc("4")}
      >
        4
      </button>
      {/* 5 */}
      <button
        className="round-button number-button"
        value="5"
        onClick={() => props.updateCalc("5")}
      >
        5
      </button>
      {/* 6 */}
      <button
        className="round-button number-button"
        value="6"
        onClick={() => props.updateCalc("6")}
      >
        6
      </button>
      {/* Subtract */}
      <button
        className="round-button"
        value="-"
        onClick={() => props.updateCalc("-")}
      >
        -
      </button>
      {/* 1 */}
      <button
        className="round-button number-button"
        value="1"
        onClick={() => props.updateCalc("1")}
      >
        1
      </button>
      {/* 2 */}
      <button
        className="round-button number-button"
        value="2"
        onClick={() => props.updateCalc("2")}
      >
        2
      </button>
      {/* 3 */}
      <button
        className="round-button number-button"
        value="3"
        onClick={() => props.updateCalc("3")}
      >
        3
      </button>
      {/* Add */}
      <button
        className="round-button"
        value="+"
        onClick={() => props.updateCalc("+")}
      >
        +
      </button>
      {/* 0 */}
      <button
        className="round-button number-button"
        value="0"
        onClick={() => props.updateCalc("0")}
      >
        0
      </button>
      {/* Decimal */}
      <button
        className="round-button"
        value="."
        onClick={() => props.updateCalc(".")}
      >
        .
      </button>
      {/* Equals */}
      <button className="oval-button" value="=" onClick={props.calculate}>
        =
      </button>
    </div>
  );
};

// Exported to calculator.js
export default KeypadComponent;
