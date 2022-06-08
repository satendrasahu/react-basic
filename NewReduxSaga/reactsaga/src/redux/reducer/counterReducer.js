import { counterContstants } from "../constants/constants";

const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case counterContstants.INCREMENT_COUNTER:
      return { ...state, value: state.value + action.payload };
    case counterContstants.INCREMENT_COUNTER_SAGA:
      return { ...state, value: state.value + action.payload };
    case counterContstants.DECREMENT_COUNTER:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export { counterReducer };
