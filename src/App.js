import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const [value, setValue] = React.useState(0);

  function increment() {
    setValue(value + 1);
    document.getElementById("digit").innerText = value.toString();
  }

  function decrement() {
    setValue(value - 1);
    document.getElementById("digit").innerText = value.toString();
  }

  function clear() {
    setValue(0);
    document.getElementById("digit").innerText = value.toString();
  }

  return (
      <ul>
          <li>Число:<span id="digit">0</span></li>
          <li><button onClick={increment}>+</button></li>
          <li><button onClick={decrement}>-</button></li>
          <li><button onClick={clear}>0</button></li>
      </ul>
  );
}

export default App;
