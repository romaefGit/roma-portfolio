import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasPlatformerComponent } from './canvas-platformer.component';

describe('CanvasPlatformerComponent', () => {
  let component: CanvasPlatformerComponent;
  let fixture: ComponentFixture<CanvasPlatformerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CanvasPlatformerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasPlatformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
