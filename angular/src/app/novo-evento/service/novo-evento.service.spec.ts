import { TestBed } from '@angular/core/testing';

import { NovoEventoService } from './novo-evento.service';

describe('NovoEventoService', () => {
  let service: NovoEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovoEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
