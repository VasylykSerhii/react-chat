import { all, takeEvery, put } from "redux-saga/effects";
import { authTokenService } from "services";

import { setUseCreation } from "./actions-creators";
import { GET_USER_ACTION } from "./actions-types";

export function* GET_USER(action) {
  yield put(setUseCreation({ loading: true }));

  const {
    email,
    family_name,
    given_name,
    id,
    picture,
  } = action.payload.additionalUserInfo.profile;

  const { accessToken } = action.payload.credential;

  if (action.payload.additionalUserInfo.profile) {
    authTokenService.setToken(accessToken);

    yield put(
      setUseCreation({
        lastName: family_name,
        firstName: given_name,
        id,
        picture,
        email,
        loading: false,
        isAuth: true,
      })
    );
  }
}

export default function* rootSaga() {
  yield all([takeEvery(GET_USER_ACTION, GET_USER)]);
}
