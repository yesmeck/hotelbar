import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers';
import rootSaga from '../sagas'

const router = routerMiddleware(hashHistory);
const saga = createSagaMiddleware()

const enhancer = applyMiddleware(thunk, router, saga);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);
  saga.run(rootSaga)
  return store
}
