// @flow
import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router';
import { RecipeForm } from './RecipeForm';

export default class Recipes extends Component {

  constructor(props) {
      super(props);

    }

  componentWillUnmount() {
  }

  render() {

    let rests = [];
    let hopAdditions = [];
    let allRestFields = [];
    let hopTimes = [];

    let formFields = {
      hopAdditions: hopTimes,
      restFields: allRestFields
    };

    let { userMessageShown, recipe, saveRecipe } = this.props;

    // todo: make form inline, use sliders

    for (let index = 0;index < 5; index++) {

      let restFields = { temperature: null, duration: null };
      allRestFields.push(restFields)

      rests.push(
        <div className="recipe-form__rest" key={index}>
          <div className="form-group">
            <label htmlFor="recipe-rest-time-{index}">Rest #{index + 1} duration</label>
            <input type="number" 
                   min="0"
                   max="100"
                   step="1"
                   className="form-control recipe-form__rest-time-{index}" 
                   id="recipe-rest-time-{index}" 
                   placeholder="60"
                   ref={(node) => {
                     restFields.duration = node;
                     if (node) {
                        node.value = recipe[`rest${index}Duration`];
                     }}} />
          </div>
          <div className="form-group">
            <label htmlFor="recipe-rest-temp-{index}">Rest #{index + 1} temperature (°C/°F)</label>
            <input type="number" 
                   min="0"
                   max="100"
                   step="1"
                   className="form-control recipe-form__rest-temp-{index}" 
                   id="recipe-rest-temp-{index}" 
                   placeholder="60"
                   ref={(node) => {
                     restFields.temperature = node;
                     if (node) {
                      node.value = recipe[`rest${index}Temperature`];
                     }}} />
          </div>
        </div>
      );
    };

    for (let index = 0;index < 6; index++) {
      hopAdditions.push(
        <div className="recipe-form__hop-addition" key={index}>
          <div className="form-group">
            <label htmlFor="recipe-hop-{index}">Hop addition #{index + 1}</label>
            <input type="number"
                   min="0"
                   max="100"
                   step="1"
                   className="form-control recipe-form__hop-{index}" 
                   id="recipe-hop-{index}" 
                   placeholder="60"
                   ref={(node) => {
                     hopTimes.push(node);
                     if (node) {
                       node.value = recipe[`hop${index}`];
                     }
                     }} />
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
            <form className="recipe-form"
                  onSubmit={e => {
                    e.preventDefault();
                    // todo: add verification
                    // todo: refactor
                    let newRecipe = {
                          name: formFields.name.value,
                          index: 0,
                          mashIn: +formFields.mashInTemp.value,
                          rest0Duration: +formFields.restFields[0].duration.value,
                          rest0Temperature: +formFields.restFields[0].temperature.value,
                          rest1Duration: +formFields.restFields[1].duration.value,
                          rest1Temperature: +formFields.restFields[1].temperature.value,
                          rest2Duration: +formFields.restFields[2].duration.value,
                          rest2Temperature: +formFields.restFields[2].temperature.value,
                          rest3Duration: +formFields.restFields[3].duration.value,
                          rest3Temperature: +formFields.restFields[3].temperature.value,
                          rest4Duration: +formFields.restFields[4].duration.value,
                          rest4Temperature: +formFields.restFields[4].temperature.value,
                          boilDuration: +formFields.boilDuration.value,
                          boilTemp: +formFields.boilTemperature.value,
                          hop0: +formFields.hopAdditions[0].value,
                          hop1: +formFields.hopAdditions[1].value,
                          hop2: +formFields.hopAdditions[2].value,
                          hop3: +formFields.hopAdditions[3].value,
                          hop4: +formFields.hopAdditions[4].value,
                          hop5: +formFields.hopAdditions[5].value
                        }
                    saveRecipe(newRecipe);
                  }}>
              <div className="form-group">
                <label htmlFor="recipe-name">Name</label>
                <input type="text" 
                       className="form-control recipe-form__name" 
                       id="recipe-name" 
                       placeholder="Name"
                       ref={node => formFields['name'] = node} />
              </div>
              {/* todo: use range / slider */}
              <div className="form-group">
                <label htmlFor="recipe-mash-in">Mash-in Temperature (°C/°F)</label>
                <input type="number"
                      min="0"
                      max="100"
                      step="1"
                       className="form-control recipe-form__mash-in" 
                       id="recipe-mash-in" 
                       placeholder="Mash-in Temp"
                       ref={node => formFields['mashInTemp'] = node} />
              </div>
              <div className="recipe-form__rests">
                {rests}
              </div>
              <div className="form-group">
                <label htmlFor="recipe-boil-duration">Boil duration</label>
                <input type="number"
                      min="0"
                      max="100"
                      step="1"
                       className="form-control recipe-form__boil-duration" 
                       id="recipe-boil-duration" 
                       placeholder="60" 
                       ref={node => formFields['boilDuration'] = node} />
              </div>
              <div className="form-group">
                <label htmlFor="recipe-boil-duration">Boil duration</label>
                <input type="input" 
                      min="0"
                      max="100"
                      step="1"
                       className="form-control recipe-form__boil-duration" 
                       id="recipe-boil-duration" 
                       placeholder="60"
                       ref={node => formFields['boilTemperature'] = node}  />
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
