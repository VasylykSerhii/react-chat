import { all, takeEvery, put } from "redux-saga/effects";

import { setStateCreation } from "./actions-creators";
import { GET_STATE_CHAT_ACTION } from "./actions-types";

export function* GET_STATE_CHAT() {
  yield put(setStateCreation({ loading: true }));
}

export default function* rootSaga() {
  yield all([takeEvery(GET_STATE_CHAT_ACTION, GET_STATE_CHAT)]);
}
