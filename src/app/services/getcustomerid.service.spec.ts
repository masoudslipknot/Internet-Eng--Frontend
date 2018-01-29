import { TestBed, inject } from '@angular/core/testing';

import { GetcustomeridService } from './getcustomerid.service';

describe('GetcustomeridService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetcustomeridService]
    });
  });

  it('should be created', inject([GetcustomeridService], (service: GetcustomeridService) => {
    expect(service).toBeTruthy();
  }));
});
