import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServbannerComponent } from './servbanner.component';

describe('ServbannerComponent', () => {
  let component: ServbannerComponent;
  let fixture: ComponentFixture<ServbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
