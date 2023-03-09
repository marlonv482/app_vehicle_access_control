import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteAccessComponent } from './complete-access.component';

describe('CompleteAccessComponent', () => {
  let component: CompleteAccessComponent;
  let fixture: ComponentFixture<CompleteAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
