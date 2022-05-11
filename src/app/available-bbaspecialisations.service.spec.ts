import { TestBed } from '@angular/core/testing';

import { AvailableBBASpecialisationsService } from './available-bbaspecialisations.service';

describe('AvailableBBASpecialisationsService', () => {
  let service: AvailableBBASpecialisationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableBBASpecialisationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
