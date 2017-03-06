/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import Settings from '../../app/components/Settings';


function setup() {
  const actions = {
    setNotificationId: spy(),
    showUserMessage: spy(),
    hideUserMessage: spy()
  };
  const component = shallow(<Settings {...actions} />);
  return {
    component,
    actions,
    buttons: component.find('button'),
    input: component.find('.notification-id'),
    h1: component.find('.settings-title')
  };
}


describe('Settings component', () => {
  it('should should display count', () => {
    const { h1 } = setup();
    expect(h1.text()).to.equal('Settings');
  });

//   it('should save button should call set id', () => {
//     const { buttons, actions } = setup();
//     buttons.at(0).simulate('click');
//     expect(actions.setNotificationId.called).to.be.true;
//   });

//   it('should save button should show user msg', () => {
//     const { buttons, actions } = setup();
//     buttons.at(1).simulate('click');
//     // console.log(buttons)
//     expect(actions.showUserMessage.called).to.be.true;
//   });

//   it('should third button should call incrementIfOdd', () => {
//     const { buttons, actions } = setup();
//     buttons.at(2).simulate('click');
//     expect(actions.incrementIfOdd.called).to.be.true;
//   });

//   it('should fourth button should call incrementAsync', () => {
//     const { buttons, actions } = setup();
//     buttons.at(3).simulate('click');
//     expect(actions.incrementAsync.called).to.be.true;
//   });
});
