import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarIndexComponent } from './toolbar-index.component';

describe('ToolbarIndexComponent', () => {
  let component: ToolbarIndexComponent;
  let fixture: ComponentFixture<ToolbarIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarIndexComponent]
    });
    fixture = TestBed.createComponent(ToolbarIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
