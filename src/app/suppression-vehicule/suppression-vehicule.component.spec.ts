import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppressionVehiculeComponent } from './suppression-vehicule.component';

describe('SuppressionVehiculeComponent', () => {
  let component: SuppressionVehiculeComponent;
  let fixture: ComponentFixture<SuppressionVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppressionVehiculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppressionVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
