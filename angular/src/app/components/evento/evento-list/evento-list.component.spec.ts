import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoListComponent } from './evento-list.component';

describe('EventoListComponent', () => {
  let component: EventoListComponent;
  let fixture: ComponentFixture<EventoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventoListComponent]
    });
    fixture = TestBed.createComponent(EventoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
