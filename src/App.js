import React from "react";
import Calculator from "./Components/calculator";
import "./App.scss";

const App = () => {
  return (
    <div className="page-container">
      <h1 className="heading">Calculator</h1>
      <Calculator />
    </div>
  );
};

export default App;
