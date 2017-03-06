// @flow
import { SET_NOTIFICATION_ID, SHOW_USER_MESSAGE, HIDE_USER_MESSAGE } from '../actions/settings';

export type settingsStateType = {
  notificationId: string,
  userMessageShown: boolean
};

type actionType = {
  type: string,
  payload: any
};

const defaultState = {
  notificationId: '',
  userMessageShown: false
};

export default function settings(state: settingsStateType = defaultState, action: actionType) {
  switch (action.type) {
    case SET_NOTIFICATION_ID:
      return {
        ...state,
        notificationId: action.payload
      };

    case SHOW_USER_MESSAGE:
      return {
        ...state,
        userMessageShown: true
      };

    case HIDE_USER_MESSAGE:
      return {
        ...state,
        userMessageShown: false
      };

    default:
      return state;
  }
}
