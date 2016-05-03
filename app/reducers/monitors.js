import { SET_MONITORS } from '../actions/monitors'

const initialState = {
  data: []
}

export default function monitors(state = initialState, action) {
  switch (action.type) {
    case SET_MONITORS:
      return { data: action.payload.monitors }
    default:
      return state
  }
}
