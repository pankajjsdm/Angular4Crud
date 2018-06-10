import { TestBed, inject } from '@angular/core/testing';

import { EmpDataService } from './emp-data.service';

describe('EmpDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpDataService]
    });
  });

  it('should be created', inject([EmpDataService], (service: EmpDataService) => {
    expect(service).toBeTruthy();
  }));
});
