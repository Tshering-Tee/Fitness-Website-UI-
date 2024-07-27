import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymAccessComponent } from './gym-access.component';

describe('GymAccessComponent', () => {
  let component: GymAccessComponent;
  let fixture: ComponentFixture<GymAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GymAccessComponent]
    });
    fixture = TestBed.createComponent(GymAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
