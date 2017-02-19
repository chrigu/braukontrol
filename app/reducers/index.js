// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import braumeister from './braumeister';

const rootReducer = combineReducers({
  braumeister,
  routing
});

export default rootReducer;
