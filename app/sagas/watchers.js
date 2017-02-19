import { takeLatest } from 'redux-saga/effects';
import { getBraumeisterDataSaga } from './braumeisterSagas';
import * as braumeisterActionTypes from '../actions/braumeister';

export function* watchGetBmData() {
  yield takeLatest(braumeisterActionTypes.GET_BM_DATA, getBraumeisterDataSaga);
}
