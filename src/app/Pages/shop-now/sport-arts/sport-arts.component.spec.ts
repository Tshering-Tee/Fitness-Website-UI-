import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportArtsComponent } from './sport-arts.component';

describe('SportArtsComponent', () => {
  let component: SportArtsComponent;
  let fixture: ComponentFixture<SportArtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportArtsComponent]
    });
    fixture = TestBed.createComponent(SportArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
