import { AnyAction } from "redux";
import { SET_USER_ACTION } from "./actions-types";

export interface IUserState {
  email: string;
  lastName: string;
  firstName: string;
  id: string;
  picture: string;
  loading: boolean;
  isAuth: boolean;
}

const initialState: IUserState = {
  email: "",
  lastName: "",
  firstName: "",
  id: "",
  picture: "",
  loading: false,
  isAuth: false,
};

export default function userReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_USER_ACTION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
