import Chartist from 'chartist';
import moment from 'moment';
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { loadSensors } from '../actions/sensorAction';
import LiveSensor from '../components/LiveSensor';

export class Chart extends Component {
    constructor(props) {
        super(props);
        this.updateChart = this.updateChart.bind(this);
    }

  componentDidMount() {

    let {data} = this.props;
    // this.updateChart(data);
    console.log("initial", this.props.data)
  }

  componentWillReceiveProps({data}) {

    let graphData = data.map(dataItem => ({
        x: new Date(dataItem.timestamp * 1000),
        y: dataItem.data
    }));

    let series = {
      series: [
        {
        name: 'test',
        data: graphData
      }
      ]
    };

    console.log(series);
    this.updateChart(series);
  }

  updateChart(data) {
    // if(data.length > 0) {
      return new Chartist.Line('.chart', data, {
        axisX: {
            type: Chartist.FixedScaleAxis,
            divisor: 5,
            labelInterpolationFnc: function(value) {
            return moment(value).format('MMM D');
            }
        }
    });
    // }
  }

  render() {
    return (
      <div className="chart"></div>
    );
  }
}

