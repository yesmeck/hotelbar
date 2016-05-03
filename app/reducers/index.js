import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import monitors from './monitors';

const rootReducer = combineReducers({
  monitors,
  routing
});

export default rootReducer;
