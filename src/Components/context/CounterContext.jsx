import React, { createContext, usestate } from "react";

export const CounterContext =()=> createContext()

export const counterprovider = ({ children }) => {
  const [count, setcount] = usestate(2);
  

  const increment = () => {
    setcount(count + 1);
  };


  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};
