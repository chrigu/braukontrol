// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Chart } from './Chart';
import styles from './Braumeister.css';
import Alert from './Alert';

export default class Settings extends Component {

  constructor(props) {
      super(props);

    }

  componentWillUnmount() {
  }

  render() {

    let idField;
    let { setNotificationId, notificationId } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Settings</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={e => {
                setNotificationId(idField.value);
              }}>
              <div className="form-group">
                <label htmlFor="notification-id">Pushover ID</label>
                <input type="text" 
                       className="form-control" id="notification-id" placeholder="Your ID" 
                       ref={(node) => { 
                         idField = node; 
                         if (idField) {
                           idField.value = notificationId;
                         }}}/>
              </div>
              <button type="submit" className="btn btn-default">Save ID</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
