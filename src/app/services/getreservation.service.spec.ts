import { TestBed, inject } from '@angular/core/testing';

import { GetreservationService } from './getreservation.service';

describe('GetreservationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetreservationService]
    });
  });

  it('should be created', inject([GetreservationService], (service: GetreservationService) => {
    expect(service).toBeTruthy();
  }));
});
