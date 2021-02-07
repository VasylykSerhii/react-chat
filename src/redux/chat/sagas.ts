import { all, takeEvery, put } from "redux-saga/effects";

import { setStateCreation } from "./actionsCreators";
import { GET_STATE_CHAT_ACTION } from "./actionsTypes";

export function* GET_STATE_CHAT() {
  yield put(setStateCreation({ loading: true }));
}

export default function* rootSaga() {
  yield all([takeEvery(GET_STATE_CHAT_ACTION, GET_STATE_CHAT)]);
}
