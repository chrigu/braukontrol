// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Braumeister from '../components/Braumeister';
import * as BraumeisterActions from '../actions/braumeister';

function mapStateToProps(state) {
  return {
    braumeister: state.braumeister
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BraumeisterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Braumeister);
