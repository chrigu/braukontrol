// @flow
import type { settingsStateType } from '../reducers/settings';

export const SET_NOTIFICATION_ID = 'SET_NOTIFICATION_ID';

export function setNotificationId(id) {
  return {
    type: SET_NOTIFICATION_ID,
    payload: id
  };
}


