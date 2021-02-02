import { combineReducers } from 'redux'
import chats from './chat/reducers'
import user from './user/reducers'

const rootReducer =  combineReducers({
  chats,
  user
})

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>