// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Chart } from './Chart';
import styles from './Braumeister.css';
import Alert from './Alert';
import Header from '../common/Header';

export default class Alerts extends Component {

  constructor(props) {
      super(props);

    }

  // componentDidMount() {
  //   let {braumeister} = this.props;
  //   this.ip = braumeister.ipAddress;
  // }

  // componentWillReceiveProps({data}) {
  //   let {braumeister} = this.props;
  //   this.ip = braumeister.ipAddress;
  // };

  componentWillUnmount() {
  }

  render() {

    let { addTemperatureAlert, temperatureAlerts, removeTemperatureAlert } = this.props;
    let treshold;

    return (
      <div className="container-fluid">
          <Header />
        <div className="row">
          <div className="col-md-12">
            <h1>Settings</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={e => {
                e.preventDefault();
                let alert = {
                  treshold: +treshold.value,
                  triggered: false
                };
                addTemperatureAlert(alert);
                treshold.value = '';
              }}
              className="form-inline">
              <div className="form-group">
                <label htmlFor="treshold">Treshold (°C)</label>
                <input type="text" className="form-control" id="treshold" placeholder="45" ref={node => { treshold = node; }}/>
              </div>
              <button type="submit" className="btn btn-default">Add Alert</button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="alerts">
              {temperatureAlerts.map((alert, index) => (
                <div key={index} className="alert-wrappper">
                  <Alert alert={alert} remove={removeTemperatureAlert} index={index}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
