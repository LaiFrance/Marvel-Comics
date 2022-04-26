import { TestBed } from '@angular/core/testing';

import { AvengersService } from './avengers.service';

describe('AvengersService', () => {
  let service: AvengersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvengersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
