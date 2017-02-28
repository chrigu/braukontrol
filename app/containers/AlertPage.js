// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Alerts from '../components/Alerts';
import * as AlertActions from '../actions/alerts';
import { addTemperatureAlert, removeTemperatureAlert } from '../reducers/alerts';

function mapStateToProps(state) {
  return {
    temperatureAlerts: state.alerts.temperatureAlerts, // only use required data...
    removeTemperatureAlert: removeTemperatureAlert,
    // addTemperatureAlert: addTemperatureAlert
    // showExportButton: showExportButton(state.braumeister)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AlertActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Alerts);
