import { put, call } from 'redux-saga/effects';
import { getBmData } from '../api/braumeister';
import * as braumeisterActionTypes from '../actions/braumeister';


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