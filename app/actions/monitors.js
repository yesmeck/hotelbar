export const WATCH_MONITORS = 'hotelbar/WATCH_MONITORS'
export const SET_MONITORS = 'hotelbar/SET_MONITORS'
export const WATCH_OUTPUT = 'hotelbar/WATCH_OUTPUT'
export const PUSH_OUTPUT = 'hotelbar/PUSH_OUTPUT'

export function watchMonitors() {
  return {
    type: WATCH_MONITORS
  }
}

export function setMonitors(monitors) {
  return {
    type: SET_MONITORS,
    payload: { monitors }
  }
}

export function watchOutput(id) {
  return {
    type: WATCH_OUTPUT,
    payload: { id }
  }
}

export function pushOuput(lines) {
  return {
    type: PUSH_OUTPUT,
    payload: { lines }
  }
}
