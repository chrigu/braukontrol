// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Recipes from '../components/Recipes';
import * as RecipesActions from '../actions/recipes';
import { userMessageShown } from '../reducers/recipes';

function mapStateToProps(state) {
  return {
    recipe: state.recipes.recipe,
    // userMessageShown: state.settings.userMessageShown,
    // showUserMessage: state.settings.showUserMessage,
    // hideUserMessage: state.settings.hideUserMessage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(RecipesActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);
