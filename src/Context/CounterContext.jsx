import React, { createContext, useState } from "react";

const CounterContext = createContext(); // Context banaya

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const add = () => setCounter((prev) => prev + 1);
  const remove = () => setCounter((prev) => prev - 1);
  const reset = () => setCounter(0);

  return (
    <CounterContext.Provider value={{ counter, add, remove, reset }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider }; // Alag-alag export kiya
