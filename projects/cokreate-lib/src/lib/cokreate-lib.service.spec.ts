import { TestBed } from '@angular/core/testing';

import { CokreateLibService } from './cokreate-lib.service';

describe('CokreateLibService', () => {
  let service: CokreateLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CokreateLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
