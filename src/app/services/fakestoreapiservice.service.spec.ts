import { TestBed } from '@angular/core/testing';

import { FakestoreapiserviceService } from './fakestoreapiservice.service';

describe('FakestoreapiserviceService', () => {
  let service: FakestoreapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakestoreapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
