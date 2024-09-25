import React, { useContext } from "react";
import { CounterContext } from "./context/CounterContext";


function CartCount() {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
export default CartCount;
