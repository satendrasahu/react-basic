import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/action/index";

const Counter = () => {
  const count = useSelector((state) => state.counterReducer.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment(1))}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(1))}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
