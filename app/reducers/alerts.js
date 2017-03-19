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
      return { ...state, triggered: true }
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
      return state.filter(id => id !== action.payload)
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_TEMPERATURE_ALERT:
      return {
        ...state,
        [action.payload.id]: alert(state[action.payload.id], action),
      };
    case TRIGGER_ALERT:
      return {
        ...state,
        [action.payload]: alert(state[action.payload], action),
      };
    case REMOVE_TEMPERATURE_ALERT:
      let newState = {};
      Object.keys( state ).forEach(( (key) => {
        if (key !== action.payload) {
          newState[key] = {...state[key]}
        }
      }));
      return newState;
    default:
      return state;
  }
};

const alerts = combineReducers({
  byId,
  allIds,
});

export default alerts;

export const getAllAlerts = (state) =>
  state.allIds.map(id => state.byId[id]);

