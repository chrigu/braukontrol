/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { spy } from 'sinon';
import * as actions from '../../app/actions/settings';


describe('settings actions', () => {
  it('should set notification should create set notification action', () => {
    let id = 'some';
    expect(actions.setNotificationId(id))
      .to.deep.equal({ type: actions.SET_NOTIFICATION_ID, payload: id });
  });

  it('should show user msg should create show user msg action', () => {
    expect(actions.showUserMessage())
      .to.deep.equal({ type: actions.SHOW_USER_MESSAGE });
  });

  it('should hide user msg should create hide user msg action', () => {
    expect(actions.hideUserMessage())
      .to.deep.equal({ type: actions.HIDE_USER_MESSAGE });
  });
});
