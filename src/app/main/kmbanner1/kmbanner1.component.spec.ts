import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kmbanner1Component } from './kmbanner1.component';

describe('Kmbanner1Component', () => {
  let component: Kmbanner1Component;
  let fixture: ComponentFixture<Kmbanner1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kmbanner1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kmbanner1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
