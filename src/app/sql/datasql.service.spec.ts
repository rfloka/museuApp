import { TestBed } from '@angular/core/testing';

import { DatasqlService } from './datasql.service';

describe('DatasqlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatasqlService = TestBed.get(DatasqlService);
    expect(service).toBeTruthy();
  });
});
