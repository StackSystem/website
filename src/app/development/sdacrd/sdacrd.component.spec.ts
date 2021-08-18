import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdacrdComponent } from './sdacrd.component';

describe('SdacrdComponent', () => {
  let component: SdacrdComponent;
  let fixture: ComponentFixture<SdacrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdacrdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdacrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
