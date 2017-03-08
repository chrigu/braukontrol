import { expect } from 'chai';
import alerts from '../../app/reducers/alerts';
import { ADD_TEMPERATURE_ALERT, REMOVE_TEMPERATURE_ALERT, TRIGGER_ALERT } from '../../app/actions/alerts';

const initialState = {
  notificationId: '',
  temperatureAlerts: []
};

describe('reducers', () => {
  describe('alerts', () => {
    it('should handle initial state', () => {
      expect(alerts(undefined, {})).to.deep.equal(initialState);
    });

    it('should handle ADD_TEMPERATURE_ALERT', () => {
      
      let alert = {
        treshold: 34,
        triggered: false
      };

      expect(alerts(initialState, 
      { 
          type: ADD_TEMPERATURE_ALERT,
          payload: alert
       })).to.deep.equal({
           notificationId: initialState.notificationId,
           temperatureAlerts: [alert]
       });
    });

    it('should handle REMOVE_TEMPERATURE_ALERT', () => {

        let index = 1;
      
        let alertList = [
            {
                treshold: 34,
                triggered: false
            },
            {
                treshold: 67,
                triggered: false
            }
        ];

      expect(alerts({...initialState, temperatureAlerts: alertList}, 
      { 
          type: REMOVE_TEMPERATURE_ALERT,
          payload: index
       })).to.deep.equal({
           notificationId: initialState.notificationId,
           temperatureAlerts: [alertList[0]]
       });
    });

    it('should handle TRIGGER_ALERT', () => {

        let index = 1;
      
        let initialAlertList = [
            {
                treshold: 34,
                triggered: false
            },
            {
                treshold: 67,
                triggered: false
            },
            {
                treshold: 100,
                triggered: false
            }
        ];

        let expectedAlertList = [
            {
                treshold: 34,
                triggered: false
            },
            {
                treshold: 67,
                triggered: true
            },
            {
                treshold: 100,
                triggered: false
            }
        ];

      expect(alerts({...initialState, temperatureAlerts: initialAlertList }, 
      { 
          type: TRIGGER_ALERT,
          payload: index
       })).to.deep.equal({
           notificationId: initialState.notificationId,
           temperatureAlerts: expectedAlertList
       });
    });
  });
});
