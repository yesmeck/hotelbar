import { call, take, put, fork } from 'redux-saga/effects'
import createSource from '../utils/createSource'
import { WATCH_OUTPUT, pushOuput } from '../actions/monitors'
import { API_HOST } from '../constants'

function* watchOutput(msgSource) {
  let data = yield call(msgSource.nextMessage)
  while(data) {
    yield put(pushOuput(data.output.split('\n')))
    data = yield call(msgSource.nextMessage)
  }
}

export default function* root() {
  const action = yield take(WATCH_OUTPUT)
  const msgSource = yield call(createSource, `${API_HOST}/events/output/${action.payload.id}`)
  yield fork(watchOutput, msgSource)
}

