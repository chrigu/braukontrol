import * as moment from "moment";
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestMethod, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BraumeisterService {

  private data$: Observable<any>;
  private interval:any;
  private url$: Subject<string>;

  constructor(private http: Http) { 

    this.url$ = new Subject();

    this.data$ = Observable.combineLatest(
      this.url$.startWith("").filter(url => url !== ""),
      Observable.timer(0, 5000)
      .timeInterval()
    )
    .map((values) => {
      let header = {'Content-Type': 'text/plain'};

      let headers = new Headers(header)

      let options = {
          method: RequestMethod.Get,
          url: values[0]
      };

      return options;
    })
    .do(x => console.log(x))
    .switchMap(options => this.http.request(new Request(options))
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

  public getStream(): Observable<any> {
    return this.data$;
  }

  public setUrl(url: string) {
    this.url$.next(url);
  }

  private parseData(data: Response):Object {
    let regex = /(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X(.*)X/;
    let results = regex.exec(data.text())
    console.log(results);

    return {
      time: moment(),
      bmTime: results[2],
      status: +results[3],
      temperature: parseFloat(results[5].replace(" ", "")),
      uptime: results[7]
    }
  }

}
