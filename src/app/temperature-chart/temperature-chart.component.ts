import { Component, OnInit, Input, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import {nvD3} from 'ng2-nvd3';
declare let d3: any;

@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.css']
})
export class TemperatureChartComponent implements OnInit {

  @Input() temperatureData: any;
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
      x: function(d){ return d.x; },
      y: function(d){ return d.y; },
      useInteractiveGuideline: true,
      dispatch: {
        stateChange: function(e){ console.log("stateChange"); },
        changeState: function(e){ console.log("changeState"); },
        tooltipShow: function(e){ console.log("tooltipShow"); },
        tooltipHide: function(e){ console.log("tooltipHide"); }
      },
      xAxis: {
        axisLabel: 'Time (ms)'
      },
      yAxis: {
        axisLabel: 'Temperatur (C)',
        tickFormat: function(d){
          return d3.format('.02f')(d);
        },
        axisLabelDistance: -10
      },
      callback: function(chart){
        console.log("!!! lineChart callback !!!");
      }
    }
    }
    this.data = [];
  }

  ngOnChanges(changes: any) {
    if (this.nvD3.chart) {
      console.log(changes['temperatureData']['currentValue']);
      let tempData = {
          values: changes['temperatureData']['currentValue'],
          key: "Temperature",
          color: '#7777ff'
        };
      this.data = [tempData];
      this.nvD3.chart.update()
      this.cd.detectChanges();

    }
  }

  ngAfterViewInit() {
    // this.nvD3 - directive instance
    // for example, to update the chart
    this.nvD3.chart.update()
  } 

}
