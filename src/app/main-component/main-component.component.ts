import { Subscription } from 'rxjs/Subscription'
import { Observable } from 'rxjs/Observable'
import { Component, OnInit } from '@angular/core';
import { BraumeisterService } from '../braumeister.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  private tempData: Object[] = [];
  private recording: boolean = false;
  private recordText = "Record";
  private tempSubscription: Subscription;
  private temp$: Observable<any>;
  private temp: Object;

  constructor(private braumeisterService: BraumeisterService) { 

    this.temp$ = this.braumeisterService.getData()
                              .map((data:any) => { 
                                return { x: data.time, y: data.temperature} 
                              })
                              .map((data) => {
                                this.tempData.push(data);
                                return this.tempData;
                              });

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.tempSubscription.unsubscribe();
  }

  private startRecording() {
      this.tempSubscription = this.temp$
                            .subscribe((data) => {
                              this.temp = data;
                            });
  }

  private stopRecording() {
      this.tempSubscription.unsubscribe();
  }

  private toggleRecord() {
    this.recording = !this.recording;

    if (this.recording) {
      this.recordText = "Stop";
    } else {
      this.recordText = "Record";
    }
  }

}
