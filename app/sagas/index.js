import { fork } from 'redux-saga/effects'
import monitors from './monitors'

export default function* root() {
  yield [
    fork(monitors)
  ]
}
