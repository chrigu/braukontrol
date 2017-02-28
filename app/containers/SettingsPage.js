// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Settings from '../components/Settings';
import * as SettingsActions from '../actions/settings';
import { setNotificationId, addTemperatureAlert, removeTemperatureAlert } from '../reducers/settings';

function mapStateToProps(state) {
  return {
    temperatureAlerts: state.settings.temperatureAlerts, // only use required data...
    removeTemperatureAlert: removeTemperatureAlert,
    // addTemperatureAlert: addTemperatureAlert
    // showExportButton: showExportButton(state.braumeister)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(SettingsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
