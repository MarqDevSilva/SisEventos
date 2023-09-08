import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfoBasicComponent } from './form-info-basic.component';

describe('FormInfoBasicComponent', () => {
  let component: FormInfoBasicComponent;
  let fixture: ComponentFixture<FormInfoBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInfoBasicComponent]
    });
    fixture = TestBed.createComponent(FormInfoBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
