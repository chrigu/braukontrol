// @flow
import { GET_BM_DATA_SUCCESS, 
         START_RECORDING,
         STOP_RECORDING,
         HIDE_TARGET_TEMP, 
         SHOW_TARGET_TEMP,
         SET_INTERVAL_ID,
         SET_BRAUMEISTER_IP } from '../actions/braumeister';

export type braumeisterStateType = {
  record: boolean,
  ipAddress: string,
  data: Object[],
  intervalId: number,
  braumeisterIp: string,
  targetTempShown: boolean // todo: if more options move to own reducers
};

type actionType = {
  type: string,
  payload: any
};

const defaultState = {
  record: false,
  ipAddress: 'localhost:4200',
  data: [],
  intervalId: 0,
  braumeisterIp: '',
  targetTempShown: false
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
    case SHOW_TARGET_TEMP:
      return {
        ...state,
        targetTempShown: true
      };
    case HIDE_TARGET_TEMP:
      return {
        ...state,
        targetTempShown: false
      };
    case SET_INTERVAL_ID:
      return {
        ...state,
        intervalId: action.payload
      }; 
    case SET_BRAUMEISTER_IP:
      return {
        ...state,
        braumeisterIp: action.payload
      };  
    default:
      return state;
  }
}

// 

export const getTemperatures = (state) => {

  let data = [
    state.data.map(dataItem => (
    {
      timestamp: dataItem.time,
      data: dataItem.temperature
    }))
  ];

  if (state.targetTempShown) {
    data.push(state.data.map(dataItem => (
    {
      timestamp: dataItem.time,
      data: dataItem.targetTemperature
    })));
  }

  return data;
}

export const showExportButton = (state) => {
  return state.data.length > 0 && !state.record;
}
