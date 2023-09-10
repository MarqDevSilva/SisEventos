import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarPrincipalComponent } from './toolbar-principal.component';

describe('ToolbarPrincipalComponent', () => {
  let component: ToolbarPrincipalComponent;
  let fixture: ComponentFixture<ToolbarPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarPrincipalComponent]
    });
    fixture = TestBed.createComponent(ToolbarPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
