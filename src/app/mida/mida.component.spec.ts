import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidaComponent } from './mida.component';

describe('MidaComponent', () => {
  let component: MidaComponent;
  let fixture: ComponentFixture<MidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MidaComponent]
    });
    fixture = TestBed.createComponent(MidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
