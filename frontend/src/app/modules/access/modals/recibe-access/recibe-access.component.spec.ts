import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecibeAccessComponent } from './recibe-access.component';

describe('RecibeAccessComponent', () => {
  let component: RecibeAccessComponent;
  let fixture: ComponentFixture<RecibeAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecibeAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecibeAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
