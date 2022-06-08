import React from "react";

const RND2 = (props) => {
  return (
    <>
      <div>RND2 : {props.count}</div>
      <button onClick={props.updateCount}>+</button>
    </>
  );
};

export default RND2;
