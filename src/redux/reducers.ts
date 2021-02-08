import { combineReducers } from "redux";

import chats from "./chat/reducers";
import user from "./user/reducers";

const rootReducer = combineReducers({
  chats,
  user,
});

export default rootReducer;
