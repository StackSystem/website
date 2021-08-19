import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AucardComponent } from './aucard.component';

describe('AucardComponent', () => {
  let component: AucardComponent;
  let fixture: ComponentFixture<AucardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AucardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AucardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
