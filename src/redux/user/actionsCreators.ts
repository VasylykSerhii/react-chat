import { SET_USER_ACTION, GET_USER_ACTION } from "./actionsTypes";
import { IUserState } from "./reducers";
import firebase from '@/firebase'

export const setUseCreation = (payload: Partial<IUserState>) => {
  return {
    type: SET_USER_ACTION,
    data: payload,
  };
};

export const getUseCreation = (payload: firebase.auth.UserCredential) => {
  return {
    type: GET_USER_ACTION,
    payload
  };
};
