import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DismissAccessComponent } from './dismiss-access.component';

describe('DismissAccessComponent', () => {
  let component: DismissAccessComponent;
  let fixture: ComponentFixture<DismissAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DismissAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DismissAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
