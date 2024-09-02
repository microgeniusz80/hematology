import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NohbanaComponent } from './nohbana.component';

describe('NohbanaComponent', () => {
  let component: NohbanaComponent;
  let fixture: ComponentFixture<NohbanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NohbanaComponent]
    });
    fixture = TestBed.createComponent(NohbanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
