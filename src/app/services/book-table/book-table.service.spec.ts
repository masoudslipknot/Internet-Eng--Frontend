import { TestBed, inject } from '@angular/core/testing';

import { BookTableService } from './book-table.service';

describe('BookTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookTableService]
    });
  });

  it('should be created', inject([BookTableService], (service: BookTableService) => {
    expect(service).toBeTruthy();
  }));
});
