import { TestBed } from '@angular/core/testing';

import { SqlPecaCrudService } from './sql-peca-crud.service';

describe('SqlPecaCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SqlPecaCrudService = TestBed.get(SqlPecaCrudService);
    expect(service).toBeTruthy();
  });
});
