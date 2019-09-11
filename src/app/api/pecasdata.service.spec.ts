import { TestBed } from '@angular/core/testing';

import { PecasdataService } from './pecasdata.service';

describe('PecasdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PecasdataService = TestBed.get(PecasdataService);
    expect(service).toBeTruthy();
  });
});
