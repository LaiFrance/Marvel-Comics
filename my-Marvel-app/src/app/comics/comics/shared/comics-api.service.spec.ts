import { TestBed } from '@angular/core/testing';

import { ComicsApiService } from './comics-api.service';

describe('ComicsApiService', () => {
  let service: ComicsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComicsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
