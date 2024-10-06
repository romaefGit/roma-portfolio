import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomaComponent } from './roma.component';

describe('RomaComponent', () => {
  let component: RomaComponent;
  let fixture: ComponentFixture<RomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RomaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
