import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEventoComponent } from './pagina-evento.component';

describe('PaginaEventoComponent', () => {
  let component: PaginaEventoComponent;
  let fixture: ComponentFixture<PaginaEventoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaEventoComponent]
    });
    fixture = TestBed.createComponent(PaginaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
