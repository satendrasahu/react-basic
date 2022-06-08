import React, { Component } from "react";
import Wrapper from "./HOC";

class HOC2 extends Component {
  clickHandler() {}
  render() {
    const { count, clickHandler } = this.props;
    return (
      <>
        <h1>{count}</h1>

        <button onClick={clickHandler}> Add on Enter</button>
      </>
    );
  }
}
export default Wrapper(HOC2,5);
