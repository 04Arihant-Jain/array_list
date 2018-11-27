import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
const numbers = [1, 2, 3, 4, 5];
const list = numbers.map(numbers => <li>{numbers}</li>);

function App() {
  return (
    <div className="App">
      <h1>Hello Hiration Interns</h1>
      <h2>Lets create some miracle!</h2>
      <ul>{list}</ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
