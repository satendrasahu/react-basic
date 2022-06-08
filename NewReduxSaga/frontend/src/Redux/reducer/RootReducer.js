import { combineReducers } from "redux";
import { ShowCounter } from "./CounterReducer";
const rootReducer = combineReducers({
  ShowCounter,
});

export { rootReducer };
