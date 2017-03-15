import { expect } from 'chai';
import alerts from '../../app/reducers/alerts';
import { ADD_TEMPERATURE_ALERT, REMOVE_TEMPERATURE_ALERT, TRIGGER_ALERT } from '../../app/actions/alerts';

const initialState = { 
    byId: {},
    allIds: [] 
}

describe('reducers', () => {
  describe('alerts', () => {
    it('should handle initial state', () => {
      expect(alerts(undefined, {})).to.deep.equal(initialState);
    });

    it('should handle ADD_TEMPERATURE_ALERT', () => {
      
      let alert = {
        treshold: 34,
        triggered: false,
        id: '234234-ssersdf-232332-sdfsdf'
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

        let id = '234234-ssersdf-232332-dfsdf';
      
        let alertList = [
            {
                treshold: 34,
                triggered: false,
                id: id
            },
            {
                treshold: 67,
                triggered: false,
                id: '234234-ssersdf-232332-32234'
            }
        ];

      expect(alerts({...initialState, temperatureAlerts: alertList}, 
      { 
          type: REMOVE_TEMPERATURE_ALERT,
          payload: id
       })).to.deep.equal({
           notificationId: initialState.notificationId,
           temperatureAlerts: [alertList[0]]
       });
    });

    it('should handle TRIGGER_ALERT', () => {

        let id = '234234-sse32332df-232332-32234';
      
        let initialAlertList = [
            {
                treshold: 34,
                triggered: false,
                id: '234234-ssersdf-232332-32234'
            },
            {
                treshold: 67,
                triggered: false,
                id: id
            },
            {
                treshold: 100,
                triggered: false,
                id: '234234-ssersdf-232332-2323231134'
            }
        ];

        let expectedAlertList = [
            {
                treshold: 34,
                triggered: false,
                id: '234234-ssersdf-232332-32234'
            },
            {
                treshold: 67,
                triggered: true,
                id: id
            },
            {
                treshold: 100,
                triggered: false,
                id: '234234-ssersdf-232332-2323231134'
            }
        ];

      expect(alerts({...initialState, temperatureAlerts: initialAlertList }, 
      { 
          type: TRIGGER_ALERT,
          payload: id
       })).to.deep.equal({
           notificationId: initialState.notificationId,
           temperatureAlerts: expectedAlertList
       });
    });
  });
});
