import React from "react";

const RND3 = (props) => {
  return (
    <>
      <div>RND3 : {props.count}</div>
      <button onClick={props.updateCount}>+</button>
    </>
  );
};

export default RND3;
