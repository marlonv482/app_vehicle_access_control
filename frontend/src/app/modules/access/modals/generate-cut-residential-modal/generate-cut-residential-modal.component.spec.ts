import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateCutResidentialModalComponent } from './generate-cut-residential-modal.component';

describe('GenerateCutResidentialModalComponent', () => {
  let component: GenerateCutResidentialModalComponent;
  let fixture: ComponentFixture<GenerateCutResidentialModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateCutResidentialModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateCutResidentialModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
