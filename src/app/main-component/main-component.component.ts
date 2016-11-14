import { Subscription } from 'rxjs/Subscription'
import { List } from 'immutable' 
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

  // private tempData: Object[] = [];
  private tempData: List<any> = List();
  private recording: boolean = false;
  private recordText = "Record";
  private tempSubscription: Subscription;
  private temp$: Observable<any>;
  private temp: Object;
  //private ip = "https://www.trivialview.ch/bm.txt";
  private ip = "localhost:3000/bm.txt";

  constructor(
    private braumeisterService: BraumeisterService,
    private localStorageService: LocalstorageService
    ) { 
    // const URL = "https://www.trivialview.ch/bm.txt";
      this.tempSubscription = this.braumeisterService.getStream()
          .map((data:any) => { 
            let dataItem = { x: data.time.toDate(), y: data.temperature};
            this.tempData = this.tempData.push(dataItem);
            this.localStorageService.saveData(data);
            return this.tempData;
          })
          .subscribe((data) => {
            this.temp = data;
          });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.tempSubscription.unsubscribe();
  }

  private startRecording() {
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

}
