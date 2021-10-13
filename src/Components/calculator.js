import React, { useState } from "react";

// Imported Components to makeup calculator
import ResultComponent from "./resultComponent.js";
import KeypadComponent from "./keypadComponent.js";

//  Main Calculator component. '
const Calculator = () => {
  // State hooks
  let [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  // Array of operators
  const ops = ["/", ".", "+", "*", "-"];

  // Update calculator
  const updateCalc = (value) => {
    // Start once user has entered a value..
    if (calc.length > 0) {
      // Do not execute calculation if the first input value is an operator and do not execute if the previous input was an operator -  only continue if there is a number before the operator to avoid errors
      const last = calc[calc.length - 1];
      const ops = ["/", ".", "+", "*", "-"];
      if (ops.includes(last) && ops.includes(value)) {
        return;
      }
    }
    // Next..
    // check if calc empty ( '' ) or fill ('2-1')
    const isEmptyCalc = !calc;
    // check if value is zero
    const isNotZero = value == 0;

    if (isNotZero && isEmptyCalc) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      let userInput = calc + value;

      // Replaced eval with Function..
      let newResult = Function("return " + userInput)();
      console.log(newResult);

      setResult(newResult);
    }
  };

  const calculate = () => {
    if (calc === "") {
      setCalc("");
    } else {
      const last = calc[calc.length - 1];

      const ops = ["/", ".", "+", "*", "-"];
      if (ops.includes(last)) {
        return;
      }

      let newResult = Function("return " + calc)();

      setCalc(newResult);
    }
  };

  // Delete button function to clear the last entered digit or operator
  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);

    setCalc(value);
  };

  // Clear button function - clears display
  const clearFunction = () => {
    setCalc("");
  };

  // JSX to be rendered with components
  return (
    <div className="calculator-container">
      <div className="calculator">
        {/* Result Component - display output */}
        <ResultComponent result={result} calc={calc} />

        {/* Keypad Component - buttons */}
        <KeypadComponent
          clearFunction={clearFunction}
          deleteLast={deleteLast}
          calculate={calculate}
          updateCalc={updateCalc}
        />
      </div>
    </div>
  );
};

// Exported to App.js
export default Calculator;
