import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../../sagas";
import rootReducer from "../reducer/index";
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(
  rootReducer,
  {},
  composeEnhancer(applyMiddleware(...middleware))
);
sagaMiddleware.run(watcherSaga);
export default store;
