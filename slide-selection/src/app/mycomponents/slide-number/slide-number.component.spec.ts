import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideNumberComponent } from './slide-number.component';

describe('SlideNumberComponent', () => {
  let component: SlideNumberComponent;
  let fixture: ComponentFixture<SlideNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
