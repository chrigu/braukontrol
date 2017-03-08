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

    let rests = [];
    let hopAdditions = [];
    let { userMessageShown } = this.props;

    // todo: make form inline, use sliders

    for (let index = 0;index < 5; index++) {
      rests.push(
        <div className="recipe-form__rest" key={index}>
          <div className="form-group">
            <label htmlFor="recipe-rest-time-{index}">Rest #{index + 1} duration</label>
            <input type="text" className="form-control recipe-form__rest-time-{index}" id="recipe-rest-time-{index}" placeholder="60" />
          </div>
          <div className="form-group">
            <label htmlFor="recipe-rest-temp-{index}">Rest #{index + 1} temperature (°C/°F)</label>
            <input type="text" className="form-control recipe-form__rest-temp-{index}" id="recipe-rest-temp-{index}" placeholder="60" />
          </div>
        </div>
      );
    };

    for (let index = 0;index < 6; index++) {
      hopAdditions.push(
        <div className="recipe-form__hop-addition" key={index}>
          <div className="form-group">
            <label htmlFor="recipe-hop-{index}">Hop addition #{index + 1}</label>
            <input type="text" className="form-control recipe-form__hop-{index}" id="recipe-hop-{index}" placeholder="60" />
          </div>
        </div>
      )
    }

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
            <form className="recipe-form">
              <div className="form-group">
                <label htmlFor="recipe-name">Name</label>
                <input type="text" className="form-control recipe-form__name" id="recipe-name" placeholder="Name" />
              </div>
              {/* todo: use range / slider */}
              <div className="form-group">
                <label htmlFor="recipe-mash-in">Mash-in Temperature (°C/°F)</label>
                <input type="text" className="form-control recipe-form__mash-in" id="recipe-mash-in" placeholder="Mash-in Temp" />
              </div>
              <div className="recipe-form__rests">
                {rests}
              </div>
              <div className="form-group">
                <label htmlFor="recipe-boil-duration">Boil duration</label>
                <input type="text" className="form-control recipe-form__boil-duration" id="recipe-boil-duration" placeholder="60" />
              </div>
              <div className="form-group">
                <label htmlFor="recipe-boil-duration">Boil duration</label>
                <input type="text" className="form-control recipe-form__boil-duration" id="recipe-boil-duration" placeholder="60" />
              </div>
              <div className="recipe-form__hop-additions">
                {hopAdditions}
              </div>
              <button className="btn btn-primary">Send to Braumeister</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
