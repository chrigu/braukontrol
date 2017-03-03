// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Chart } from './Chart';
import styles from './Braumeister.css';
import Alert from './Alert';
import Header from '../common/Header';

export default class Settings extends Component {

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

    let idField;
    let { setNotificationId, notificationId } = this.props;

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
                setNotificationId(idField.value);
              }}
              className="form-inline">
              <div className="form-group">
                <label htmlFor="notification-id">Pushbox ID</label>
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
