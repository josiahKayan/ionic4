import { TestBed } from '@angular/core/testing';

import { AcampamentoService } from './acampamento.service';

describe('AcampamentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcampamentoService = TestBed.get(AcampamentoService);
    expect(service).toBeTruthy();
  });
});
