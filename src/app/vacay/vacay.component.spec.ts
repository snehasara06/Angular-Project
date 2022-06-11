import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacayComponent } from './vacay.component';

describe('VacayComponent', () => {
  let component: VacayComponent;
  let fixture: ComponentFixture<VacayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
