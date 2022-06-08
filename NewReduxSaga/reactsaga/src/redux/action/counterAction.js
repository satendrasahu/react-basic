import { counterContstants } from "../constants/constants";

const increment = (payload) => {
  console.log(payload);
  return {
    type: counterContstants.INCREMENT_COUNTER,
    payload,
  };
};
const incrementBySaga = (payload) => {
  console.log("pyaload", payload);
  return {
    type: counterContstants.INCREMENT_COUNTER_SAGA,
    payload,
  };
};
const decrement = (payload) => {
  return {
    type: counterContstants.DECREMENT_COUNTER,
    payload,
  };
};

export { increment, decrement, incrementBySaga };
