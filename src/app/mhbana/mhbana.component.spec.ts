import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MhbanaComponent } from './mhbana.component';

describe('MhbanaComponent', () => {
  let component: MhbanaComponent;
  let fixture: ComponentFixture<MhbanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MhbanaComponent]
    });
    fixture = TestBed.createComponent(MhbanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
