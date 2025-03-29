import React, { useContext } from "react";
import { CounterContext } from "./CounterContext"; // Context import kiya

function Counter1() {
  const { counter, add, remove, reset } = useContext(CounterContext); // Context se values le rahe hain

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={add}>➕ Add</button>
      <button onClick={remove}>➖ Remove</button>
      <button onClick={reset}>🔄 Reset</button>
    </>
  );
}

export default Counter1;
