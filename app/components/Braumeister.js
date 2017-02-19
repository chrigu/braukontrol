// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import { Chart } from './Chart';
// import styles from './Home.css';


export default class Braumeister extends Component {

  constructor(props) {
      super(props);
      this.toggleRecord = this.toggleRecord.bind(this);
      this.interval = null;
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

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleRecord(ip: string) {
    // use redux-thunk?
    if (this.props.braumeister.record) {
      this.props.stopRecording();
      clearInterval(this.interval);
    } else {
      this.props.startRecording(ip);
      this.props.getBmData(ip);
      this.interval = setInterval(() => {
        this.props.getBmData(ip);
      }, 5 * 1000);
    }
  }

  render() {

    const { startRecording, stopRecording, braumeister, tempData } = this.props;
    let recordButtonText = braumeister.record ? 'Stop' : 'Record';
    let ip;
    console.log(tempData);

    return (
      <div className="container-fluid">
        <form className="form-inline">
          <div className="form-group">
            <label className="sr-only" htmlFor="ip-address" >IP Address</label>
            <input type="text" 
                   className="form-control" 
                   id="ip-address" 
                   placeholder="192.168.1.2"
                   ref={node => { ip = node; }} />
          </div>
          <button type="button" 
                  className="btn btn-default"
                  onClick={() => this.toggleRecord(ip.value)}>{recordButtonText}</button>
        </form>
        <Chart data={tempData} />
      </div>
    );
  }
}
