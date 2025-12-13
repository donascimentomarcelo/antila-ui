/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ManualEntryService } from './manual-entry.service';

describe('Service: ManualEntry', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManualEntryService]
    });
  });

  it('should ...', inject([ManualEntryService], (service: ManualEntryService) => {
    expect(service).toBeTruthy();
  }));
});
