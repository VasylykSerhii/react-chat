import { all } from 'redux-saga/effects'
import chat from './chat/sagas'
export default function* rootSaga() {
  yield all([chat()])
}
