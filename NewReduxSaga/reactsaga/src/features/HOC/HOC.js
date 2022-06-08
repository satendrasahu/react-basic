import React, { Component } from "react";

const Wrapper = (OriginalComponent, number) => {
  class HOC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    clickHandler = () => {
      this.setState((prevState) => {
        return { count: prevState.count + number };
      });
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          clickHandler={this.clickHandler}
          myname={this.props.MyName}
        />
      );
    }
  }

  return HOC;
};

export default Wrapper;
