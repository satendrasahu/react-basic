import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../Redux/action/counter.Action";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.ShowCounter);
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment(5))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(10))}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
