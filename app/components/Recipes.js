// @flow
import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router';
import { Chart } from './Chart';

export default class Recipes extends Component {

  constructor(props) {
      super(props);

    }

  componentWillUnmount() {
  }

  render() {

    let { userMessageShown } = this.props;

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

          </div>
        </div>
      </div>
    );
  }
}
