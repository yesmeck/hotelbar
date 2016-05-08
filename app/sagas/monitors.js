import { eventChannel } from 'redux-saga'
import { call, take, put, fork } from 'redux-saga/effects'
import { WATCH_MONITORS, setMonitors } from '../actions/monitors'
import { API_HOST } from '../constants'

function subscribe() {
  const source = new EventSource(`${API_HOST}/events`)
  return eventChannel(listener => {
    source.onmessage = (event) => {
      listener(JSON.parse(event.data))
    }
    return () => {
      source.close()
    }
  })
}

function* watchMonitors() {
  const channel = yield call(subscribe)
  while (true) {
    let data = yield take(channel)
    yield put(setMonitors(data.monitors))
  }
}

export default function* root() {
  yield take(WATCH_MONITORS)
  yield fork(watchMonitors)
}
