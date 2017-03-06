// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Settings from '../components/Settings';
import * as SettingsActions from '../actions/settings';
import { setNotificationId } from '../reducers/settings';

function mapStateToProps(state) {
  return {
    notificationId: state.settings.notificationId,
    userMessageShown: state.settings.userMessageShown,
    showUserMessage: state.settings.showUserMessage,
    hideUserMessage: state.settings.hideUserMessage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SettingsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
