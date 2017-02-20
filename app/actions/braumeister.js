// @flow
import type { braumeisterStateType } from '../reducers/braumeister';

export const START_RECORDING = 'START_RECORDING';
export const STOP_RECORDING = 'STOP_RECORDING';
export const GET_BM_DATA = 'GET_BM_DATA';
export const GET_BM_DATA_SUCCESS = 'GET_BM_DATA_SUCCESS';
export const GET_BM_DATA_FAIL = 'GET_BM_DATA_FAIL';
export const EXPORT_BM_DATA = 'EXPORT_BM_DATA';


export function startRecording(ipAddress) {
  return {
    type: START_RECORDING,
    payload: ipAddress
  };
}

export function stopRecording() {
  return {
    type: STOP_RECORDING
  };
}

export function exportBmData() {
  return {
    type: EXPORT_BM_DATA
  };
}

export function getBmData(ipAddress) {
  return {
    type: GET_BM_DATA,
    payload: ipAddress
  };
}

export function getDataBmSuccess(data) {
  return {
    type: GET_BM_DATA_SUCCESS,
    payload: data
  };
}
