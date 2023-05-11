import { TestBed } from '@angular/core/testing';

import { UniFunctionsService } from './uni-functions.service';

describe('UniFunctionsService', () => {
  let service: UniFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
