// @flow
import { ADD_TEMPERATURE_ALERT, 
         REMOVE_TEMPERATURE_ALERT,
         TRIGGER_ALERT } from '../actions/alerts';

type TemperatureAlert = {treshold: number; triggered: boolean};

export type settingsStateType = {
  notificationId: string,
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

export default function alerts(state: settingsStateType = defaultState, action: actionType) {
  switch (action.type) {
    case ADD_TEMPERATURE_ALERT:
      return {
        ...state,
        temperatureAlerts: [...state.temperatureAlerts, action.payload]
      };
    case REMOVE_TEMPERATURE_ALERT:
      return {
        ...state,
        temperatureAlerts: [
          ...state.temperatureAlerts.slice(0, action.payload),
          ...state.temperatureAlerts.slice(action.payload + 1)
      ]};
    case TRIGGER_ALERT:
      return {
        ...state,
        temperatureAlerts: [
          ...state.temperatureAlerts.slice(0, action.payload),
          {...state.temperatureAlerts[action.payload], triggered: true},
          ...state.temperatureAlerts.slice(action.payload + 1)
      ]};
    default:
      return state;
  }
}

export const getTemperatureAlerts = (state) => {
  return state.temperatureAlerts;
}
