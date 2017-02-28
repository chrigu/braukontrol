// @flow
import type { settingsStateType, TemperatureAlert } from '../reducers/settings';

export const SET_NOTIFICATION_ID = 'SET_NOTIFICATION_ID';
export const ADD_TEMPERATURE_ALERT = 'ADD_TEMPERATURE_ALERT';
export const REMOVE_TEMPERATURE_ALERT = 'REMOVE_TEMPERATURE_ALERT';


export function setNotificationId(id) {
  return {
    type: SET_NOTIFICATION_ID,
    payload: id
  };
}

export function addTemperatureAlert(alert) {
  return {
    type: ADD_TEMPERATURE_ALERT,
    payload: alert
  };
}

export function removeTemperatureAlert(index: number) {
  return {
    type: REMOVE_TEMPERATURE_ALERT,
    payload: index
  };
}

