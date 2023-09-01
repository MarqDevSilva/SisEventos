import { TestBed } from '@angular/core/testing';

import { EditarEventoService } from './editar-evento.service';

describe('EditarEventoService', () => {
  let service: EditarEventoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarEventoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
