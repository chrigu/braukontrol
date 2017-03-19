// @flow
import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import RecipeForm from './RecipeForm';

export default class Recipes extends Component {

  constructor(props) {
      super(props);

    }

  componentWillUnmount() {
  }

  handleSubmit = (values) => {
    // Do something with the form values
    console.log('values', values);
  }

  render() {

    let { userMessageShown, recipe, saveRecipe } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            {
              userMessageShown &&
                <Alert bsStyle="success">
                  <strong>All saved!</strong>
                </Alert>
            }
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h1 className="settings-title">Add new recipe</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
          <RecipeForm handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

