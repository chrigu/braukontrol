/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BraumeisterService } from './braumeister.service';

describe('Service: Braumeister', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BraumeisterService]
    });
  });

  it('should ...', inject([BraumeisterService], (service: BraumeisterService) => {
    expect(service).toBeTruthy();
  }));
});
