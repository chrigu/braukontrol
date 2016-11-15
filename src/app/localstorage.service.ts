import * as moment from "moment";
import { Injectable } from '@angular/core';

const KEY = "braukontrol";

@Injectable()
export class LocalstorageService {

  private hasStorage:boolean;

  constructor() { 
    this.hasStorage = typeof(Storage) !== "undefined";
  }

  private getData() {
    return JSON.parse(localStorage.getItem(KEY));
  }

  public pushData(dataItem:Object) {
    if (this.hasStorage) {
      let data = this.getData();
      data.push(dataItem);
      localStorage.setItem(KEY, JSON.stringify(data));
    }
  }

  public reset() {
    if (this.hasStorage) {
      localStorage.setItem(KEY, JSON.stringify([]));
    }
  }

  public generateCsv() {
    let data = this.getData();
    let csvContent = "data:text/csv;charset=utf-8,";

    for(let i = 0;i < data.length;i++) {
      // get values
      let valuesArray = [];
      for(let key in data[i]) {
        let value = data[i][key];

        if (key === "time") {
          value = moment(data[i][key]).format("YYYY-MM-DD HH:mm:ss");
        }
        valuesArray.push(value);
      }

      let dataString = valuesArray.join(",");
      csvContent += i < data.length ? dataString+ "\n" : dataString;
    }
    
    let encodedUri = encodeURI(csvContent);
    window.open(encodedUri);
  }

}
