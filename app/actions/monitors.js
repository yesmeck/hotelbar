export const WATCH_MONITORS = 'hotelbar/WATCH_MONITORS'
export const SET_MONITORS = 'hotelbar/SET_MONITORS'

export function watchMonitors() {
  return {
    type: WATCH_MONITORS,
  }
}

export function setMonitors(monitors) {
  return {
    type: SET_MONITORS,
    payload: { monitors }
  }
}
