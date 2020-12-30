import { TestBed } from '@angular/core/testing';

import { KoreancornersService } from './koreancorners.service';

describe('KoreancornersService', () => {
  let service: KoreancornersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KoreancornersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
