import { fork, take, delay, put, takeEvery } from 'redux-saga/effects';
import {watchGetBmData} from './watchers';

export default function* startForman() {
yield [
    watchGetBmData()
  ]
}
