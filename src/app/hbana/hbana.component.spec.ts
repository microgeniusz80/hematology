import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HbanaComponent } from './hbana.component';

describe('HbanaComponent', () => {
  let component: HbanaComponent;
  let fixture: ComponentFixture<HbanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HbanaComponent]
    });
    fixture = TestBed.createComponent(HbanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
