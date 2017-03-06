/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { spy } from 'sinon';
import * as actions from '../../app/actions/braumeister';


describe('braumeister actions', () => {
  it('should start recording should create start recording action', () => {
    let ip = '192.168.1.1';
    expect(actions.startRecording(ip))
        .to.deep.equal({ type: actions.START_RECORDING, payload: ip });
  });

  it('should stop recording should create stop recording action', () => {
    expect(actions.stopRecording())
        .to.deep.equal({ type: actions.STOP_RECORDING});
  });

  it('should export data should create export data action', () => {
    expect(actions.exportBmData())
        .to.deep.equal({ type: actions.EXPORT_BM_DATA});
  });

  it('should start recording should create start recording action', () => {
    let ip = '192.168.1.1';
    expect(actions.getBmData(ip))
        .to.deep.equal({ type: actions.GET_BM_DATA, payload: ip });
  });

  it('should start recording should create start recording action', () => {
    let data = {data: 1223};
    expect(actions.getDataBmSuccess(data))
        .to.deep.equal({ type: actions.GET_BM_DATA_SUCCESS, payload: data });
  });

  it('should show target temp should show target temp action', () => {
    expect(actions.showTargetTemp())
        .to.deep.equal({ type: actions.SHOW_TARGET_TEMP });
  });

  it('should hide target temp should hide target temp action', () => {
    expect(actions.hideTargetTemp())
        .to.deep.equal({ type: actions.HIDE_TARGET_TEMP });
  });

  it('should set interval temp should set interval temp action', () => {
    let id = 1234;
    expect(actions.setIntervalId(id))
        .to.deep.equal({ type: actions.SET_INTERVAL_ID, payload: id });
  });

  it('should set BM ip should set BM ip action', () => {
    let ip = '192.168.1.1';
    expect(actions.setBmIp(ip))
        .to.deep.equal({ type: actions.SET_BRAUMEISTER_IP, payload: ip });
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
