import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcompleteAccessComponent } from './icomplete-access.component';

describe('IcompleteAccessComponent', () => {
  let component: IcompleteAccessComponent;
  let fixture: ComponentFixture<IcompleteAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcompleteAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcompleteAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
