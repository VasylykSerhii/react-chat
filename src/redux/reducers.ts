import { combineReducers } from 'redux'
import chats from './chat/reducers'

const rootReducer =  combineReducers({
  chats
})

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;