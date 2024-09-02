import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MchComponent } from './mch.component';

describe('MchComponent', () => {
  let component: MchComponent;
  let fixture: ComponentFixture<MchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MchComponent]
    });
    fixture = TestBed.createComponent(MchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
