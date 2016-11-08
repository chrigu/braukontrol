import * as moment from "moment";
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestMethod, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';

const URL = "https://www.trivialview.ch/bm.txt";

@Injectable()
export class BraumeisterService {

  private data$: Observable<any>;
  private interval:any;

  constructor(private http: Http) { 

    let header = {'Content-Type': 'text/plain'};

    let headers = new Headers(header)

    let options = {
        method: RequestMethod.Get,
        url: `${URL}`
    };

    // this.data$ = new Subject();
    this.data$ = Observable.timer(0, 10000)
      .timeInterval()
      .switchMap(() => this.http.request(new Request(options))
          .map((data: Response) => this.parseData(data))
          .catch(this.handleError));

// "0X19:21X4006X1000X 44.0X0X34:02X2X5X3X0XAPHTXpHX000
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
    return Observable.throw(errMsg);
  }

  public getData() {
    // if (this.data$ == null) {
    //   this.data$ = new Subject();
    // }

    return this.data$;
  }

  private parseData(data: Response):Object {
          let regex = /(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X/;
          let results = regex.exec(data.text())
          console.log(results);

          return {
            time: moment(),
            bmTime: results[2],
            status: results[3],
            temperature: results[5].replace(" ", ""),
            uptime: results[7]
          }
  }

  // private getDataFromBm() {
  //   console.log("asfasfd");
  //   return this.http.get(this.url)
  //         .map(data => this.data$.next(data));
  // }

}
