// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Braumeister from '../components/Braumeister';
import * as BraumeisterActions from '../actions/braumeister';
import { getTemperatures } from '../reducers/braumeister';

function mapStateToProps(state) {
  return {
    braumeister: state.braumeister, // only use required data...
    tempData: getTemperatures(state.braumeister)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BraumeisterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Braumeister);
