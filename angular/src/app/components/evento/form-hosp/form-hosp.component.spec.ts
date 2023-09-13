import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHospComponent } from './form-hosp.component';

describe('FormHospComponent', () => {
  let component: FormHospComponent;
  let fixture: ComponentFixture<FormHospComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormHospComponent]
    });
    fixture = TestBed.createComponent(FormHospComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
