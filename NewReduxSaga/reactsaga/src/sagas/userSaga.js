import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { increment, incrementBySaga } from "../redux/action/counterAction";
import { counterContstants } from "../redux/constants/constants";
import store from "../redux/store/store";

const getUserName = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const result = await data.json();
  return result.id;
};

// workere saga
export function* fetchUser(action) {
  try {
    const user = yield getUserName();
    console.log(user);
    // yield put(counterContstants.INCREMENT_COUNTER, increment(10) );
    // yield put(counterContstants.INCREMENT_COUNTER_SAGA, incrementBySaga(10));
    // store.dispatch(incrementBySaga(10));
    yield put({
      ...action,
      type: counterContstants.INCREMENT_COUNTER_SAGA,
      payload: 10,
    });
  } catch (e) {
    yield put({ type: "USER_NAME_FETCH_FAILED", message: e.message });
    console.log({ ERROR_MESSAGE: e.message });
  }
}

export function* userSaga() {
  yield takeLatest(counterContstants.INCREMENT_COUNTER, fetchUser);
}
