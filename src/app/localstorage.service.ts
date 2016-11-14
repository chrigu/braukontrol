import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  private hasStorage:boolean;

  constructor() { 
    this.hasStorage = typeof(Storage) !== "undefined";
  }

  public saveData(data:Object) {
    if (this.hasStorage) {
      localStorage.setItem("braukontrol", JSON.stringify(data));
    }
  }

}
