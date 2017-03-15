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

      let byId = {};
      byId[alert.id] = alert;

      expect(alerts(initialState, 
      { 
          type: ADD_TEMPERATURE_ALERT,
          payload: alert
       })).to.deep.equal({
           allIds: [ alert.id ],
           byId: byId
       });
    });

    it('should handle REMOVE_TEMPERATURE_ALERT', () => {

        let alert1 = {
            treshold: 34,
            triggered: false,
            id: '234234-ssersdf-232332-sdfsdf'
        };

        let alert2 = {
            treshold: 66,
            triggered: true,
            id: '11111-222222-333333-sdfsdf'
        };

        let byId1 = {};
        byId1[alert1.id] = alert1;
        byId1[alert2.id] = alert2;

        let byId2 = {};
        byId2[alert1.id] = alert1;

        expect(alerts({ allIds: [ alert1.id, alert2.id ], byId: byId1}, 
        { 
            type: REMOVE_TEMPERATURE_ALERT,
            payload: alert2.id
        })).to.deep.equal({
            allIds: [ alert1.id ],
            byId: byId2
        });
    });

    it('should handle TRIGGER_ALERT', () => {

        let alert1 = {
            treshold: 34,
            triggered: false,
            id: '234234-ssersdf-232332-sdfsdf'
        };

        let alert2 = {
            treshold: 66,
            triggered: false,
            id: '11111-222222-333333-sdfsdf'
        };

        let byId1 = {};
        byId1[alert1.id] = alert1;
        byId1[alert2.id] = alert2;

        let byId2 = {};
        byId2[alert1.id] = alert1;
        byId2[alert2.id] = {
            ...alert2,
            triggered: true
        };

      expect(alerts({ allIds: [ alert1.id, alert2.id ], byId: byId1}, 
      { 
          type: TRIGGER_ALERT,
          payload: alert2.id
       })).to.deep.equal({
            allIds: [ alert1.id, alert2.id ],
            byId: byId2
       });
    });
  });
});
