import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericSuccessModalComponent } from './generic-success-modal.component';

describe('GenericSuccessModalComponent', () => {
  let component: GenericSuccessModalComponent;
  let fixture: ComponentFixture<GenericSuccessModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericSuccessModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericSuccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
