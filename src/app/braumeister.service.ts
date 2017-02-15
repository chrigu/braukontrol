import * as moment from 'moment';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestMethod, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';
import 'rxjs/add/observable/empty';


const TIMEOUT = 10 * 1000;

@Injectable()
export class BraumeisterService {

  private data$: Observable<any>;
  private interval:any;
  private url$: Subject<string>;

  constructor(private http: Http) { 

    this.url$ = new Subject();

    this.data$ = Observable.combineLatest(
      this.url$.startWith('').filter(url => url !== ''),
      Observable.timer(0, TIMEOUT)
      .timeInterval()
    )
    .map((values) => {
      let header = {'Content-Type': 'text/plain'};

      let headers = new Headers(header);

      let options = {
          method: RequestMethod.Get,
          url: `http://${values[0]}/bm.txt`
      };

      return options;
    })
    .switchMap(options => this.http.request(new Request(options))
        .map((data: Response) => this.parseData(data))
        .retry(3)
        .catch(this.handleError));

// '0X19:21X4006X1000X 44.0X0X34:02X2X5X3X0XAPHTXpHX000

  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.empty();
  }

  public getStream(): Observable<any> {
    return this.data$;
  }

  public setUrl(url: string) {
    this.url$.next(url);
  }

  private parseOpData(data: string): Object {
    // p = pump off, q = pump inactive (temp)?, P = pump on
    // h = heating off, H = heating on, q = heating on but inactive?
    /*
    New Data: V1.1.24 Jan 12 2017;0004A30B003F4546;0X18:22XCX101X-10000X 17.5X4800X277X0X0X0X0XEMSRXphX000
    */
    return {
      pump: data.indexOf('P') > -1,
      heating: data.indexOf('H') > -1
    };
  }

  private parseData(data: Response): Object {

    let dataText = data.text();

    if (dataText.startsWith('V')) {
      dataText = dataText.split(';')[2];
    }

    let regex = /(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X/;
    let results = regex.exec(dataText);
    console.log(results);

    let opStatus = this.parseOpData(results[13]);

    return {
      time: moment(),
      bmTime: results[2],
      status: +results[3],
      targetTemperature: (+results[4])/10,
      temperature: parseFloat(results[5].replace(' ', '')),
      uptime: results[7],
      heating: opStatus['heating'],
      pump: opStatus['pump']
    }
  }

}
