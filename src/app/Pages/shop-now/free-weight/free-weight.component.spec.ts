import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeWeightComponent } from './free-weight.component';

describe('FreeWeightComponent', () => {
  let component: FreeWeightComponent;
  let fixture: ComponentFixture<FreeWeightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeWeightComponent]
    });
    fixture = TestBed.createComponent(FreeWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
