import React from "react";
import { Wrapper } from "../wraperComp/Wrapper";

const Hoc2 = (props) => {
  return (
    <>
      <div>HOC_2 Count {props.name} : {props.count}</div>
      <button onClick={props.updateCount}>+</button>
      <br />
    </>
  );
};

export default Wrapper(Hoc2);
