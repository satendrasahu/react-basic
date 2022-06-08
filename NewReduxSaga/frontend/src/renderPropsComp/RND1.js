import React from "react";

const RND1 = (props) => {
  return (
    <>
      <div>RND1 : {props.count}</div>
      <button onClick={props.updateCount}>+</button>
    </>
  );
};

export default RND1;
