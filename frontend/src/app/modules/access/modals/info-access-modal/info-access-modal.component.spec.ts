import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAccessModalComponent } from './info-access-modal.component';

describe('InfoAccessModalComponent', () => {
  let component: InfoAccessModalComponent;
  let fixture: ComponentFixture<InfoAccessModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAccessModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAccessModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
