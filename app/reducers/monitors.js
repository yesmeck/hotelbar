import { SET_MONITORS, PUSH_OUTPUT } from '../actions/monitors'
import uid from 'uid'

const initialState = {
  data: [],
  output: []
}

export default function monitors(state = initialState, action) {
  switch (action.type) {
    case SET_MONITORS:
      return {
        ...state,
        data: action.payload.monitors
      }
    case PUSH_OUTPUT:
      const output = action.payload.lines.reduce((acc, line) => {
        acc.push({ line, _uid: uid() })
        if (acc.length > 1000) {
          acc.shift()
        }
        return acc
      }, state.output.slice())
      return {
        ...state,
        output
      }
    default:
      return state
  }
}
