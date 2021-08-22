import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsstartComponent } from './ssstart.component';

describe('SsstartComponent', () => {
  let component: SsstartComponent;
  let fixture: ComponentFixture<SsstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsstartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
