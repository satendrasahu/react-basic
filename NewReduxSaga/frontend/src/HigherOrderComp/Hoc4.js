import React from "react";
import { WrapperFucnComp } from "../wraperComp/Wrapper";

const Hoc4 = (props) => {
  return (
    <>
      <div>
        HOC_4 Count {props.name}: {props.count}
      </div>
      <button onClick={props.updateCount}>+</button>
      <br />
    </>
  );
};

// export default Hoc4;
export default WrapperFucnComp(Hoc4, 10, 100);
