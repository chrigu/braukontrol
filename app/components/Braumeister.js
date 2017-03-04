// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Chart } from './Chart';
import styles from './Braumeister.css';


export default class Braumeister extends Component {

  constructor(props) {
      super(props);
      this.toggleRecord = this.toggleRecord.bind(this);
      this.toggleTargetTemp = this.toggleTargetTemp.bind(this);
      this.ip = '';
    }

  // componentDidMount() {
  //   let {braumeister} = this.props;
  //   this.ip = braumeister.ipAddress;
  // }

  // componentWillReceiveProps({data}) {
  //   let {braumeister} = this.props;
  //   this.ip = braumeister.ipAddress;
  // };

  toggleRecord(ip: string) {
    // use redux-thunk?
    if (this.props.braumeister.record) {
      this.props.stopRecording();
      clearInterval(this.props.braumeister.intervalId);
    } else {
      this.props.startRecording(ip);
      this.props.getBmData(ip);
      let interval = setInterval(() => {
        this.props.getBmData(ip);
      }, 5 * 1000);
      this.props.setIntervalId(interval);
      this.props.setBmIp(ip);
    }
  }

  toggleTargetTemp(show: boolean) {
    show ? this.props.hideTargetTemp() : this.props.showTargetTemp();
  }

  render() {

    let ip;
    const { startRecording, stopRecording, braumeister, tempData, showExportButton, 
      exportBmData, targetTempShown, record } = this.props;
    const recordButtonText = braumeister.record ? 'Stop' : 'Record';
    const showExportButtonClass = showExportButton ? '' : ' is-hidden';

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1>Braukontrol</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form className="form-inline">
              <div className="form-group">
                <label className="sr-only" htmlFor="ip-address">IP Address</label>
                <input type="text" 
                      className="form-control" 
                      id="ip-address" 
                      placeholder="192.168.1.2"
                      ref={(node) => { 
                        ip = node; 
                        if (ip) {
                          ip.value = braumeister.ipAddress
                        }}}/>
              </div>
              <button type="button" 
                      className="btn btn-default"
                      onClick={() => this.toggleRecord(ip.value)}>{recordButtonText}</button>
              <button type="button"
                      className={`btn btn-default${showExportButtonClass}`}
                      onClick={exportBmData}>
                      Export
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form className="form-inline">
              <div className="form-group">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" 
                           value={braumeister.targetTempShown}
                           onClick={() => this.toggleTargetTemp(braumeister.targetTempShown)}/> Show target temperature
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Chart data={tempData} />
      </div>
    );
  }
}
