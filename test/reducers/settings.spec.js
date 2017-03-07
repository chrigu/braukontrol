import { expect } from 'chai';
import settings from '../../app/reducers/settings';
import { SET_NOTIFICATION_ID, SHOW_USER_MESSAGE, HIDE_USER_MESSAGE } from '../../app/actions/settings';

let initialState = {
    notificationId: '',
    userMessageShown: false
}

describe('reducers', () => {
  describe('settings', () => {
    it('should handle initial state', () => {
      expect(settings(undefined, {})).to.deep.equal(initialState);
    });

    it('should handle SET_NOTIFICATION_ID', () => {
      
      let id = 'somsomsmsmsmsmms';
      expect(settings(initialState, 
      { 
          type: SET_NOTIFICATION_ID,
          payload: id
       })).to.deep.equal({
          notificationId: id,
          userMessageShown: initialState['userMessageShown']
      });
    });

    it('should handle SHOW_USER_MESSAGE', () => {
      
      expect(settings(initialState, 
      { 
          type: SHOW_USER_MESSAGE
       })).to.deep.equal({
          notificationId: initialState['notificationId'],
          userMessageShown: true
      });
    });

    it('should handle HIDE_USER_MESSAGE', () => {
      
      expect(settings(initialState, 
      { 
          type: HIDE_USER_MESSAGE
       })).to.deep.equal({
          notificationId: initialState['notificationId'],
          userMessageShown: false
      });
    });
  });
});
