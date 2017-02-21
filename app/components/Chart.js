import Chartist from 'chartist';
import moment from 'moment';
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

export class Chart extends Component {
    constructor(props) {
        super(props);
        this.updateChart = this.updateChart.bind(this);
    }

  componentDidMount() {

    let {data} = this.props;
    console.log("initial", this.props.data);
  }

  componentWillReceiveProps({data}) {

    // todo: don't use position
    // refactor....
    let graphData = data[0].map(dataItem => ({
        x: new Date(dataItem.timestamp),
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

    if (data.length > 1) {
      let targetTempData = data[1].map(dataItem => ({
          x: new Date(dataItem.timestamp),
          y: dataItem.data
      }));

      series.series.push(targetTempData);
    }

    this.updateChart(series);
  }

  updateChart(data) {
    // if(data.length > 0) {
      return new Chartist.Line('.chart', data, {
        axisX: {
            type: Chartist.FixedScaleAxis,
            divisor: 5,
            labelInterpolationFnc: function(value) {
            return moment(value).format('HH:mm');
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

