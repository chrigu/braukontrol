// @flow
import { SET_NOTIFICATION_ID, ADD_TEMPERATURE_ALERT, REMOVE_TEMPERATURE_ALERT } from '../actions/settings';

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

export default function settings(state: settingsStateType = defaultState, action: actionType) {
  switch (action.type) {
    case SET_NOTIFICATION_ID:
      return {
        ...state,
        notificationId: action.payload
      };
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

    default:
      return state;
  }
}
