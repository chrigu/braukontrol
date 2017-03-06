/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { spy } from 'sinon';
import * as actions from '../../app/actions/settings';


describe('actions', () => {
  it('should set notification should create set notification action', () => {
    let id = 'some';
    expect(actions.setNotificationId(id)).to.deep.equal({ type: actions.SET_NOTIFICATION_ID, payload: id });
  });

  it('should show user msg should create show user msg action', () => {
    expect(actions.showUserMessage()).to.deep.equal({ type: actions.SHOW_USER_MESSAGE });
  });

  it('should hide user msg should create hide user msg action', () => {
    expect(actions.hideUserMessage()).to.deep.equal({ type: actions.HIDE_USER_MESSAGE });
  });

//   it('should incrementIfOdd should create increment action', () => {
//     const fn = actions.incrementIfOdd();
//     expect(fn).to.be.a('function');
//     const dispatch = spy();
//     const getState = () => ({ counter: 1 });
//     fn(dispatch, getState);
//     expect(dispatch.calledWith({ type: actions.INCREMENT_COUNTER })).to.be.true;
//   });

//   it('should incrementIfOdd shouldnt create increment action if counter is even', () => {
//     const fn = actions.incrementIfOdd();
//     const dispatch = spy();
//     const getState = () => ({ counter: 2 });
//     fn(dispatch, getState);
//     expect(dispatch.called).to.be.false;
//   });

//   // There's no nice way to test this at the moment...
//   it('should incrementAsync', done => {
//     const fn = actions.incrementAsync(1);
//     expect(fn).to.be.a('function');
//     const dispatch = spy();
//     fn(dispatch);
//     setTimeout(() => {
//       expect(dispatch.calledWith({ type: actions.INCREMENT_COUNTER })).to.be.true;
//       done();
//     }, 5);
//   });
});
