import { TestBed, inject } from '@angular/core/testing';

import { CustomerServiceService } from './customer-service.service';

describe('CustomerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerServiceService]
    });
  });

  it('should be created', inject([CustomerServiceService], (service: CustomerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
