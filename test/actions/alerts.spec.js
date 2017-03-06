/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { spy } from 'sinon';
import * as actions from '../../app/actions/alerts';


describe('alerts actions', () => {
  it('should add temp alert should create add temp alert action', () => {
    let alert = {treshold: 34, triggered: false};
    expect(actions.addTemperatureAlert(alert))
        .to.deep.equal({ type: actions.ADD_TEMPERATURE_ALERT, payload: alert });
  });

  it('should remove temp alert should create add temp alert action', () => {
    let index = 2;
    expect(actions.removeTemperatureAlert(index))
        .to.deep.equal({ type: actions.REMOVE_TEMPERATURE_ALERT, payload: index });
  });

  it('should trigger temp alert should create add trigger alert action', () => {
    let index = 2;
    expect(actions.triggerAlert(index))
        .to.deep.equal({ type: actions.TRIGGER_ALERT, payload: index });
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
