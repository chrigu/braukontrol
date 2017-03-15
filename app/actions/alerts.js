// @flow
import { v4 } from 'node-uuid';

import type { alertsStateType, TemperatureAlert } from '../reducers/alerts';

export const ADD_TEMPERATURE_ALERT = 'ADD_TEMPERATURE_ALERT';
export const REMOVE_TEMPERATURE_ALERT = 'REMOVE_TEMPERATURE_ALERT';
export const TRIGGER_ALERT = 'TRIGGER_ALERT';

export const addTemperatureAlert = (alert) => (
  {
    type: ADD_TEMPERATURE_ALERT,
    payload: { ...alert, id: v4() }
  }
)

export const removeTemperatureAlert = (id: string) => (
  {
    type: REMOVE_TEMPERATURE_ALERT,
    payload: id
  }
)

export const triggerAlert = (id: string) => (
  {
    type: TRIGGER_ALERT,
    payload: id
  }
);

