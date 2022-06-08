import React, { Component } from "react";
import Wrapper from "./HOC";

class HOC1 extends Component {
  clickHandler() {}
  render() {
    const { count, clickHandler } = this.props;
    return (
      <>
        <p>{this.props.myname}</p>
        <h1>{count}</h1>
        <button onClick={() => clickHandler()}> Add</button>
      </>
    );
  }
}
export default Wrapper(HOC1,10);
