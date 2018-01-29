import { TestBed, inject } from '@angular/core/testing';

import { CheckTableService } from './check-table.service';

describe('CheckTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckTableService]
    });
  });

  it('should be created', inject([CheckTableService], (service: CheckTableService) => {
    expect(service).toBeTruthy();
  }));
});
