import { fork, take, delay, put, takeEvery } from 'redux-saga/effects';
import { watchGetBmData, watchExportData, watchGetBmDataSuccess} from './watchers';

export default function* startForman() {
yield [
    watchGetBmData(),
    watchExportData(),
    watchGetBmDataSuccess()
  ]
}
