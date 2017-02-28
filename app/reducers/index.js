// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import braumeister from './braumeister';
import alerts from './alerts';


const rootReducer = combineReducers({
  braumeister,
  alerts,
  routing
});

export default rootReducer;
