import { TestBed, inject } from '@angular/core/testing';

import { ReserveService } from './reserve.service';

describe('ReserveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReserveService]
    });
  });

  it('should be created', inject([ReserveService], (service: ReserveService) => {
    expect(service).toBeTruthy();
  }));
});
