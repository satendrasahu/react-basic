import { COUNT_DECREMENT, COUNT_INCREMENT } from "../Constants/Constants";

const initialState = 0;

const ShowCounter = (state = initialState, action) => {
  switch (action.type) {
    case COUNT_DECREMENT:
      return state - action.payload;
    case COUNT_INCREMENT:
      return state + action.payload;
    default:
      return state;
  }
};

export { ShowCounter };
