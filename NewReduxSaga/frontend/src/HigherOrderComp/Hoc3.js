import { Component } from "react";
import { Wrapper } from "../wraperComp/Wrapper";

class Hoc3 extends Component {

  render() {
    return (
      <>
        <div>HOC_3 Count : {this.props.count}</div>
        <button onClick={this.props.updateCount}>+</button>
        <br />
      </>
    );
  }
}

export default Wrapper(Hoc3);
