/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CosifService } from './cosif.service';

describe('Service: Cosif', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CosifService]
    });
  });

  it('should ...', inject([CosifService], (service: CosifService) => {
    expect(service).toBeTruthy();
  }));
});
