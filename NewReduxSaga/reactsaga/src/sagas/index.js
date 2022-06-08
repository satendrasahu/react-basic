import { all } from "redux-saga/effects";
import { userSaga } from "./userSaga";

export function* watcherSaga() {
  yield all([userSaga()]);
}
