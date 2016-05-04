import { remote } from 'electron'
import { eventChannel } from 'redux-saga'
import { call, take, put, fork } from 'redux-saga/effects'
import { WATCH_MONITORS, setMonitors } from '../actions/monitors'
import { API_HOST } from '../constants'

const servers = remote.require('hotel/lib/daemon/server-group')()

function subscribe() {
  return eventChannel(emit => {
    const listener = () => {
      emit(servers.list())
    }
    servers.on('change', listener)
    setTimeout(listener)
    return () => {
      servers.removeListener('change', listener);
    }
  })
}

function* watchMonitors() {
  const channel = yield call(subscribe)
  while (true) {
    let monitors = yield take(channel)
    yield put(setMonitors(monitors))
  }
}

export default function* root() {
  yield take(WATCH_MONITORS)
  yield fork(watchMonitors)
}
