import { AnyAction } from "redux";
import { SET_STATE_CHAT_ACTION } from "./actions-types";

export interface IChatState {
  data: [];
  loading: boolean;
}

const initialState: IChatState = {
  data: [],
  loading: false,
};

export default function userReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_STATE_CHAT_ACTION:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
