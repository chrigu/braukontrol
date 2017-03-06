// @flow
import type { settingsStateType } from '../reducers/settings';

export const SET_NOTIFICATION_ID = 'SET_NOTIFICATION_ID';
export const SHOW_USER_MESSAGE = 'SHOW_USER_MESSAGE';
export const HIDE_USER_MESSAGE = 'HIDE_USER_MESSAGE';

export function setNotificationId(id) {
  return {
    type: SET_NOTIFICATION_ID,
    payload: id
  };
}

export function showUserMessage() {
  return {
    type: SHOW_USER_MESSAGE
  };
}

export function hideUserMessage() {
  return {
    type: HIDE_USER_MESSAGE
  };
}


