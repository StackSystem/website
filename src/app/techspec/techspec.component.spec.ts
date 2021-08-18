import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechspecComponent } from './techspec.component';

describe('TechspecComponent', () => {
  let component: TechspecComponent;
  let fixture: ComponentFixture<TechspecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechspecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
