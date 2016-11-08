import * as d3 from 'd3';
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.css']
})
export class TemperatureChartComponent implements OnInit {

  @Input() temperatureData: any;
  @ViewChild('chart') chart: ElementRef;
  private htmlElement: HTMLElement;
  private host;

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.htmlElement = this.chart.nativeElement;
    this.host = d3.select(this.htmlElement);
    this.host.style("background-color", "yellow");
  }

}
