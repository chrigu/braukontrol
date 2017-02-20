import { put, call, select } from 'redux-saga/effects';
import { getBmData } from '../api/braumeister';
import { generateCsv } from '../export/csv';
import * as braumeisterActionTypes from '../actions/braumeister';

export const getAllData = (state) => state.braumeister.data;

export function* getBraumeisterDataSaga({payload}) {
    try {
        const data = yield call(getBmData, payload);
        yield [
            put({ type: braumeisterActionTypes.GET_BM_DATA_SUCCESS, payload: data }),
        ];
    } catch (error) {
        yield put({ type: braumeisterActionTypes.GET_BM_DATA_FAIL, payload: error });
    }
}

export function* exportCsvDataSaga(action) {
    let data = yield select(getAllData);
    console.log("data", data)
    yield call(generateCsv, data)
}