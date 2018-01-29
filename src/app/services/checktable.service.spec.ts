import { TestBed, inject } from '@angular/core/testing';

import { ChecktableService } from './checktable.service';

describe('ChecktableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChecktableService]
    });
  });

  it('should be created', inject([ChecktableService], (service: ChecktableService) => {
    expect(service).toBeTruthy();
  }));
});
