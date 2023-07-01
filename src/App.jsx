import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
    console.log(count);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }

    console.log(count);
  }

  return (
    <div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      count={count}
      <></>
    </div>
  );
}

export default App;
