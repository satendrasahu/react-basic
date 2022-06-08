import { Component, useState } from "react";

class RenderProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  updateCount = () => {
    this.setState((previous) => {
      return {
        count: previous.count + 1,
      };
    });
  };

  render() {
    return <>{this.props.counter(this.state.count, this.updateCount)}</>;
  }
}

class RenderPropsChildren extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  updateCount = () => {
    this.setState((previous) => {
      return {
        count: previous.count + 1,
      };
    });
  };

  render() {
    return <>{this.props.children(this.state.count, this.updateCount)}</>;
  }
}

const RenderPropsFunc = (props) => {
  const [countState, setCountState] = useState(0);
  const updateCount = () => {
    setCountState(countState + 1);
  };

  return <>{props.children(countState, updateCount)}</>;
};
export { RenderProps, RenderPropsChildren, RenderPropsFunc };
