/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocalstorageService } from './localstorage.service';

describe('Service: Localstorage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalstorageService]
    });
  });

  it('should ...', inject([LocalstorageService], (service: LocalstorageService) => {
    expect(service).toBeTruthy();
  }));
});
