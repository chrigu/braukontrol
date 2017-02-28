import { takeLatest } from 'redux-saga/effects';
import { getBraumeisterDataSaga, exportCsvDataSaga, getBraumeisterDataSuccessSaga } from './braumeisterSagas';
import * as braumeisterActionTypes from '../actions/braumeister';

export function* watchGetBmData() {
  yield takeLatest(braumeisterActionTypes.GET_BM_DATA, getBraumeisterDataSaga);
}

export function* watchExportData() {
  yield takeLatest(braumeisterActionTypes.EXPORT_BM_DATA, exportCsvDataSaga);
}

export function* watchGetBmDataSuccess() {
  yield takeLatest(braumeisterActionTypes.GET_BM_DATA_SUCCESS, getBraumeisterDataSuccessSaga);
}
