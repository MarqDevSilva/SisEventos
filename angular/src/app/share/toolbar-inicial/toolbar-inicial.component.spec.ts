import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarInicialComponent } from './toolbar-inicial.component';

describe('ToolbarInicialComponent', () => {
  let component: ToolbarInicialComponent;
  let fixture: ComponentFixture<ToolbarInicialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarInicialComponent]
    });
    fixture = TestBed.createComponent(ToolbarInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
