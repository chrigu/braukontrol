// @flow
import { GET_BM_DATA_SUCCESS, START_RECORDING, STOP_RECORDING } from '../actions/braumeister';

export type braumeisterStateType = {
  record: boolean,
  ipAddress: string,
  data: Object[],
  displayOptions: []
};

type actionType = {
  type: string,
  payload: any
};

const defaultState = {
  record: false,
  ipAddress: 'localhost:3000',
  data: [],
  displayOptions: []
};

export default function braumeister(state: braumeisterStateType = defaultState, action: actionType) {
  switch (action.type) {
    case GET_BM_DATA_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case START_RECORDING:
      return {
        ...state,
        data: [],
        record: true,
        ipAddress: action.payload
      };
    case STOP_RECORDING:
      return {
        ...state,
        record: false,
        ipAddress: ''
      };
    default:
      return state;
  }
}

// 

export const getTemperatures = (state) => {
  return state.data.map(dataItem => (
    {
      timestamp: dataItem.time,
      data: dataItem.temperature
    }));
}

export const showExportButton = (state) => {
  return state.data.length > 0 && !state.record;
}
