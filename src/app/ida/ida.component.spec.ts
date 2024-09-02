import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdaComponent } from './ida.component';

describe('IdaComponent', () => {
  let component: IdaComponent;
  let fixture: ComponentFixture<IdaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IdaComponent]
    });
    fixture = TestBed.createComponent(IdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
