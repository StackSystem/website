import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AubannerComponent } from './aubanner.component';

describe('AubannerComponent', () => {
  let component: AubannerComponent;
  let fixture: ComponentFixture<AubannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AubannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AubannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
