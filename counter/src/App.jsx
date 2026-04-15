import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);
  // let counter = 5;
  const addValue = () => {
    console.log("value added : ", counter);
    counter = counter + 1;
    setCounter(counter);
  }
  const removeValue = () => {
    console.log("value decreased : ", counter);
    counter = counter - 1;
    setCounter(counter);
  }
  return (
    <>
      <h1>chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Decrease value</button>
    </>
  );
}

export default App;
