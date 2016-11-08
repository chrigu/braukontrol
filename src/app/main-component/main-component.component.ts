import { Subscription } from 'rxjs/Subscription'
import { Component, OnInit } from '@angular/core';
import { BraumeisterService } from '../braumeister.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {

  private tempData: Object[] = [];
  private tempSubscription: Subscription;

  constructor(private braumeisterService: BraumeisterService) { 
    console.log(braumeisterService);

    this.tempSubscription = this.braumeisterService.getData()
                              .map((data:any) => { 
                                return { time: data.time, temperature: data.temperature} 
                              })
                              .subscribe((data) => {
                                console.log(data);
                                this.tempData.push(data);
                              });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.tempSubscription.unsubscribe();
  }

}
