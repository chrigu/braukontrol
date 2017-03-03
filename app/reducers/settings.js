// @flow
import { SET_NOTIFICATION_ID } from '../actions/settings';

export type settingsStateType = {
  notificationId: string
};

type actionType = {
  type: string,
  payload: any
};

const defaultState = {
  notificationId: ''
};

export default function settings(state: settingsStateType = defaultState, action: actionType) {
  switch (action.type) {
    case SET_NOTIFICATION_ID:
      return {
        ...state,
        notificationId: action.payload
      };

    default:
      return state;
  }
}
