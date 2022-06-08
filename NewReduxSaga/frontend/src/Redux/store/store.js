import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { rootReducer } from "../reducer/RootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export { store };
