import { Subscription } from 'rxjs/Subscription'
import { List, Map } from 'immutable' 
import { Observable } from 'rxjs/Observable'
import { Component, OnInit } from '@angular/core';
import { BraumeisterService } from '../braumeister.service';
import { LocalstorageService } from '../localstorage.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  private data = Map({
      temperature: List(),
      targetTemperature: List()
  });
  // private tempData: List<any> = List();
  private recording: boolean = false;
  private recordText = "Record";
  private tempSubscription: Subscription;
  private temp$: Observable<any>;
  private displayData: Object;
  private showTargetTemp = false;
  //private ip = "https://www.trivialview.ch/bm.txt";
  private ip = "localhost:3000/bm.txt";

  constructor(
    private braumeisterService: BraumeisterService,
    private localStorageService: LocalstorageService
    ) { 

    // const URL = "https://www.trivialview.ch/bm.txt";
      this.tempSubscription = this.braumeisterService.getStream()
          .map((data:any) => { 
            // get right data

            // save all data to localstorage
            // save all data in right format to local Object
            // filter data by active parameters
            // set displayData 
            this.localStorageService.pushData(data);
            let tempdDataItem = { x: data.time.toDate(), y: data.temperature};
            let targetTempdDataItem = { x: data.time.toDate(), y: data.targetTemperature};
            this.data = this.data.set('temperature', this.data.get('temperature').push(tempdDataItem));
            this.data = this.data.set('targetTemperature', this.data.get('targetTemperature').push(targetTempdDataItem));
            // this.data = this.tempData.push(tempdDataItem);

            let displayData = Map({
              temperature: this.data.get('temperature')
            });
            if (this.showTargetTemp) {
              displayData = displayData.set('targetTemperature', this.data.get('targetTemperature'));
            }

            return displayData;
          })
          .subscribe((data) => {
            console.log(data);
            this.displayData = data;
          });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.tempSubscription.unsubscribe();
  }

  private startRecording() {
    this.localStorageService.reset();
    this.braumeisterService.setUrl(this.ip);
  }

  private stopRecording() {
      this.tempSubscription.unsubscribe();
  }

  private toggleRecord() {
    this.recording = !this.recording;

    if (this.recording) {
      this.recordText = "Stop";
      this.startRecording();
    } else {
      this.recordText = "Record";
      this.stopRecording();
    }
  }

  private export() {
    this.localStorageService.generateCsv();
  }

}
