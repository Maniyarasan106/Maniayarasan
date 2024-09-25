import React, { useContext } from "react";
import { CounterContext } from "./context/CounterContext";

function CountProductComp() {
  const { increment } = useContext(CounterContext);

  return (
    <div>
      <h1>apple</h1>
      <button onClick={increment}>add to cart</button>
    </div>
  );
}
export default CountProductComp();
