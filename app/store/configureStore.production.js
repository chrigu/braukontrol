// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

import * as braumeisterActions from '../actions/braumeister';
import type { braumeisterStateType } from '../reducers/braumeister';

const router = routerMiddleware(hashHistory);
const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware, thunk, router);

export default function configureStore(initialState?: counterStateType) {
  const store = createStore(rootReducer, initialState, enhancer); // eslint-disable-line;
  sagaMiddleware.run(rootSaga);
  return store;
}
