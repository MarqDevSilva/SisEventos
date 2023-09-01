import { TestBed } from '@angular/core/testing';

import { PaginaEventoService } from './pagina-evento.service';

describe('PaginaEventoService', () => {
  let service: PaginaEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginaEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
