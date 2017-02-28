import { put, call, select } from 'redux-saga/effects';
import { getBmData } from '../api/braumeister';
import { generateCsv } from '../export/csv';
import * as braumeisterActionTypes from '../actions/braumeister';
import { getTemperatureAlerts } from '../reducers/alerts';

export const getAllData = (state) => state.braumeister.data;
export const getTempAlerts = (state) => getTemperatureAlerts(state.alerts);

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
    yield call(generateCsv, data)
}

export function* getBraumeisterDataSuccessSaga({payload}) {
    let data = yield select(getAllData);
    if (data.length > 1) {
        let alerts = yield select(getTempAlerts);
        console.warn(alerts, data[data.length - 2]);
    }
}