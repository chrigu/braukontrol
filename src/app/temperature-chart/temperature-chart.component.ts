import { Component, OnInit, Input, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import {nvD3} from 'ng2-nvd3';
declare let d3: any;

@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.css']
})
export class TemperatureChartComponent implements OnInit {

  @Input() bmData: any;
  @ViewChild('nvd3') nvD3: nvD3;

  private htmlElement: HTMLElement;
  private host;
  private options;
  private data;

  constructor(private cd: ChangeDetectorRef) {}

ngOnInit(){
    this.options = {
chart: {
      type: 'lineChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 40,
        left: 55
      },
      x: d => d.x,
      y: d => d.y,
      useInteractiveGuideline: true,
      dispatch: {
        stateChange: function(e){ console.log("stateChange"); },
        changeState: function(e){ console.log("changeState"); },
        tooltipShow: function(e){ console.log("tooltipShow"); },
        tooltipHide: function(e){ console.log("tooltipHide"); }
      },
      xAxis: {
        axisLabel: 'Time',
        tickFormat: function(d){
          return d3.time.format('%H:%M')(new Date(d))
          // return d3.format('%H:%M')(d);
        },
      },
      yAxis: {
        axisLabel: 'Temperature (C)',
        tickFormat: function(d){
          return d3.format('.01f')(d);
        },
        axisLabelDistance: -10
      },
      forceY: [30, 100],
      callback: function(chart){
      }
    }
    }
    this.data = [];
  }

  ngOnChanges(changes: any) {
    if (this.nvD3.chart) {
      let dataArray = [];
      let tempData = {
          values: changes['bmData']['currentValue'].get('temperature').toArray(),
          key: "Temperature",
          color: '#E53935',
          area: false
        };
        dataArray.push(tempData);

      if (changes['bmData']['currentValue'].has('targetTemperature')) {
        let targetTempData = {
            values: changes['bmData']['currentValue'].get('targetTemperature').toArray(),
            key: "Target Temperature",
            color: '#ae00ff',
            area: false
          };
          dataArray.push(targetTempData);
      };

      this.data = dataArray;
      this.nvD3.chart.update()
      // this.cd.detectChanges();

    }
  }

  ngAfterViewInit() {
    // this.nvD3 - directive instance
    // for example, to update the chart
    this.nvD3.chart.update()
  } 

}
