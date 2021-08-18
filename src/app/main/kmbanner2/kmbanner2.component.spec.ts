import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kmbanner2Component } from './kmbanner2.component';

describe('Kmbanner2Component', () => {
  let component: Kmbanner2Component;
  let fixture: ComponentFixture<Kmbanner2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Kmbanner2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Kmbanner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
