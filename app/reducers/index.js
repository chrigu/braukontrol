// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import braumeister from './braumeister';
import alerts from './alerts';
import settings from './settings';

const rootReducer = combineReducers({
  braumeister,
  alerts,
  settings,
  routing
});

export default rootReducer;
