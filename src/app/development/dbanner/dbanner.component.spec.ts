import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbannerComponent } from './dbanner.component';

describe('DbannerComponent', () => {
  let component: DbannerComponent;
  let fixture: ComponentFixture<DbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
