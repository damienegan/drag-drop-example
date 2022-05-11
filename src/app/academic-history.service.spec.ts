import { TestBed } from '@angular/core/testing';

import { AcademicHistoryService } from './academic-history.service';

describe('AcademicHistoryService', () => {
  let service: AcademicHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcademicHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
