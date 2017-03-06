// @flow
import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router';
import { Chart } from './Chart';
import styles from './Braumeister.css';

export default class Settings extends Component {

  constructor(props) {
      super(props);

    }

  componentWillUnmount() {
  }

  render() {

    let idField;
    let { setNotificationId, 
          notificationId, 
          userMessageShown, 
          showUserMessage,
          hideUserMessage } = this.props;

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
            <h1>Settings</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={e => {
                e.preventDefault();
                setNotificationId(idField.value);
                showUserMessage();
                setTimeout(() => hideUserMessage(), 1500);
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
