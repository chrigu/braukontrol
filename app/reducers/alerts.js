// @flow
import * as uuid from 'node-uuid';
import { combineReducers } from 'redux';

import { ADD_TEMPERATURE_ALERT, 
         REMOVE_TEMPERATURE_ALERT,
         TRIGGER_ALERT } from '../actions/alerts';

type TemperatureAlert = {
  treshold: number; 
  triggered: boolean;
  id: string;
};

export type settingsStateType = {
  temperatureAlerts: TemperatureAlert[];
};

type actionType = {
  type: string,
  payload: any
};

const defaultState = {
  notificationId: '',
  temperatureAlerts: []
};

const alert = (state, action: actionType) => {
  switch (action.type) {
    case ADD_TEMPERATURE_ALERT:
      return action.payload;
    case TRIGGER_ALERT:
      return { ...action.payload, triggered: true }
    default:
      return state;
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case ADD_TEMPERATURE_ALERT:
      return [
        ...state, 
        action.payload.id,
        ];
    case REMOVE_TEMPERATURE_ALERT:
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_TEMPERATURE_ALERT:
    case TRIGGER_ALERT:
      return {
        ...state,
        [action.payload.id]: alert(state[action.payload.id], action),
      };
    default:
      return state;
  }
};

const alerts = combineReducers({
  byId,
  allIds,
});

export default alerts;

// export default function alerts(state: settingsStateType = defaultState, action: actionType) {
//   switch (action.type) {
//     case ADD_TEMPERATURE_ALERT:
//       return {
//         ...state,
//         temperatureAlerts: [...state.temperatureAlerts, action.payload]
//       };
//     case REMOVE_TEMPERATURE_ALERT:
//       return {
//         ...state,
//         temperatureAlerts: [
//           ...state.temperatureAlerts.slice(0, action.payload),
//           ...state.temperatureAlerts.slice(action.payload + 1)
//       ]};
//     case TRIGGER_ALERT:
//       return {
//         ...state,
//         temperatureAlerts: [
//           ...state.temperatureAlerts.slice(0, action.payload),
//           {...state.temperatureAlerts[action.payload], triggered: true},
//           ...state.temperatureAlerts.slice(action.payload + 1)
//       ]};
//     default:
//       return state;
//   }
// }

export const getAllAlerts = (state) =>
  state.allIds.map(id => state.byId[id]);

export const getTemperatureAlerts = (state) => {
  return state.temperatureAlerts;
}
