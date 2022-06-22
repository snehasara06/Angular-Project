import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbCarouselbasicComponent } from './ngb-carouselbasic.component';

describe('NgbCarouselbasicComponent', () => {
  let component: NgbCarouselbasicComponent;
  let fixture: ComponentFixture<NgbCarouselbasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbCarouselbasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbCarouselbasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
