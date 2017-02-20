import { fork, take, delay, put, takeEvery } from 'redux-saga/effects';
import { watchGetBmData, watchExportData} from './watchers';

export default function* startForman() {
yield [
    watchGetBmData(),
    watchExportData()
  ]
}
