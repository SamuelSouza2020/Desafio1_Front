import './App.css'
import './Components/Users/Button.css'
import React, { useState } from "react";

/*function App(){*/
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <h1>Valor: </h1>
      <h3>{count}</h3>
      <div className="inner-container">
        <div className="button-container">
          <button className="custom-button blue" value="1" onClick={() => setCount(count + 1)}>+1</button>
        </div>
        <div className="button-container">
          <button className="custom-button blue" value="10" onClick={() => setCount(count + 10)}>+10</button>
        </div>
        <div className="button-container">
          <button className="custom-button blue" value="100" onClick={() => setCount(count + 100)}>+100</button>
        </div>
        <div className="button-container">
          <button className="custom-button red" value="-100" onClick={() => setCount(count - 100)}>-100</button>
        </div>
        <div className="button-container">
          <button className="custom-button red" value="-10" onClick={() => setCount(count - 10)}>-10</button>
        </div>
        <div className="button-container">
          <button className="custom-button red" value="-1" onClick={() => setCount(count - 1)}>-1</button>
        </div>
      </div>
    </div>
  )
}
export default App;