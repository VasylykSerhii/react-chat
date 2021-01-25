import { 
  SET_STATE_CHAT_ACTION,
  GET_STATE_CHAT_ACTION, 
} from "./actionsTypes";
import { IChatState } from "./reducers";

export const setStateCreation = (payload:  Partial<IChatState>) => {
  return {
    type: SET_STATE_CHAT_ACTION,
    data: payload,
  };
};

export const getStateCreation = () => {
  return {
    type: GET_STATE_CHAT_ACTION,
  };
};
