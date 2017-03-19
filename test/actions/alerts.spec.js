/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { spy } from 'sinon';
import * as actions from '../../app/actions/alerts';


describe('alerts actions', () => {
  it('should add temp alert should create add temp alert action', () => {
    let alert = {treshold: 34, triggered: false};
    let action = actions.addTemperatureAlert(alert)
    expect(action.type).to.equal( actions.ADD_TEMPERATURE_ALERT);
    expect(action.payload.treshold).to.equal( alert.treshold );
    expect(action.payload.triggered).to.equal( alert.triggered );
  });

  it('should remove temp alert should create add temp alert action', () => {
    let id = 'asdsdaf-asdfsa23322424';
    expect(actions.removeTemperatureAlert(id))
        .to.deep.equal({ type: actions.REMOVE_TEMPERATURE_ALERT, payload: id });
  });

  it('should trigger temp alert should create add trigger alert action', () => {
    let id = 'asdsdaf-asdfsa23322424';
    expect(actions.triggerAlert(id))
        .to.deep.equal({ type: actions.TRIGGER_ALERT, payload: id });
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
