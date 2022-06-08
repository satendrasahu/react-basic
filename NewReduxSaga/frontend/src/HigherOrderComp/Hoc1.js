import React from "react";
import { Wrapper } from "../wraperComp/Wrapper";

const Hoc1 = (props) => {
  return (
    <>
      <div>HOC_1 Count : {props.count}</div>
      <button onClick={props.updateCount}>+</button><br/>
    </>
  );
};

export default Wrapper(Hoc1);
