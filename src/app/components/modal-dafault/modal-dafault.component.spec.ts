import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDafaultComponent } from './modal-dafault.component';

describe('ModalDafaultComponent', () => {
  let component: ModalDafaultComponent;
  let fixture: ComponentFixture<ModalDafaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDafaultComponent]
    });
    fixture = TestBed.createComponent(ModalDafaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
