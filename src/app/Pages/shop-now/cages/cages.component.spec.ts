import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CagesComponent } from './cages.component';

describe('CagesComponent', () => {
  let component: CagesComponent;
  let fixture: ComponentFixture<CagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CagesComponent]
    });
    fixture = TestBed.createComponent(CagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
