import React, { Component, useState } from "react";

const Wrapper = (OriginalComp) => {
  class CounterComp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 10,
      };
    }
    updateCount = () => {
      this.setState((previous) => {
        return { count: previous.count + 1 };
      });
    };

    render() {
      return (
        <>
          <OriginalComp
            count={this.state.count}
            updateCount={this.updateCount}
            {...this.props}
          />
        </>
      );
    }
  }
  return CounterComp;
};

const WrapperFucnComp = (OriginalComp, num, mun1) => {
  const NewComp = (props) => {
    const [countState, setCountState] = useState(0);
    const updateCount = () => {
      setCountState(countState + num + mun1);
    };
    return (
      <>
        <OriginalComp count={countState} updateCount={updateCount} {...props} />
      </>
    );
  };
  return NewComp;
};

export { Wrapper, WrapperFucnComp };
