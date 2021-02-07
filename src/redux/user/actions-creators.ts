import { SET_USER_ACTION, GET_USER_ACTION } from "./actions-types";
import { IUserState } from "./reducers";
import { firebase } from "utils";

export const setUseCreation = (payload: Partial<IUserState>) => {
  return {
    type: SET_USER_ACTION,
    payload,
  };
};

export const getUseCreation = (payload: firebase.auth.UserCredential) => {
  return {
    type: GET_USER_ACTION,
    payload,
  };
};

const userActionCreators = {
  setUseCreation,
  getUseCreation,
};

export default userActionCreators;
