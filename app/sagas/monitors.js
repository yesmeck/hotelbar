import { call, take, put, fork } from 'redux-saga/effects'
import createSource from '../utils/createSource'
import { WATCH_MONITORS, setMonitors } from '../actions/monitors'
import { API_HOST } from '../constants'

function* watchMonitors(msgSource) {
  let data = yield call(msgSource.nextMessage)
  while(data) {
    yield put(setMonitors(data.monitors))
    data = yield call(msgSource.nextMessage)
  }
}

export default function* root() {
  yield take(WATCH_MONITORS)
  const msgSource = yield call(createSource, `${API_HOST}/events`)
  yield fork(watchMonitors, msgSource)
}
