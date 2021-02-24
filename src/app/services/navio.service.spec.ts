import { TestBed } from '@angular/core/testing';

import { NavioService } from './navio.service';

describe('NavioService', () => {
  let service: NavioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
