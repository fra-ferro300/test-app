import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerWrapperComponent } from './spinner-wrapper.component';

describe('SpinnerComponent', () => {
  let component: SpinnerWrapperComponent;
  let fixture: ComponentFixture<SpinnerWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
