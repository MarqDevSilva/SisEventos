import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPayComponent } from './form-pay.component';

describe('FormPayComponent', () => {
  let component: FormPayComponent;
  let fixture: ComponentFixture<FormPayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPayComponent]
    });
    fixture = TestBed.createComponent(FormPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
