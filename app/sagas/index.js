import { fork } from 'redux-saga/effects'
import monitors from './monitors'
import output from './output'

export default function* root() {
  yield [
    fork(monitors),
    fork(output),
  ]
}
