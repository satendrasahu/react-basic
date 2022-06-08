import React from "react";
import { decrement, increment } from "../../Redux/action/counter.Action";
import { connect, useDispatch } from "react-redux";
const Counter = (props) => {
  console.log("props", props);
  const { count, addCount, removeCount } = props;
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={()=>dispatch(increment(100))}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={removeCount}>
          Decrement
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { count: state.ShowCounter };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // addCount: () => dispatch(increment(3)),
    removeCount: () => dispatch(decrement(5)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
