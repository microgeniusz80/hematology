import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronstudyComponent } from './ironstudy.component';

describe('IronstudyComponent', () => {
  let component: IronstudyComponent;
  let fixture: ComponentFixture<IronstudyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IronstudyComponent]
    });
    fixture = TestBed.createComponent(IronstudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
