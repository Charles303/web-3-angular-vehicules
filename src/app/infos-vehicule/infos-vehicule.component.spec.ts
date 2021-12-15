import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosVehiculeComponent } from './infos-vehicule.component';

describe('InfosVehiculeComponent', () => {
  let component: InfosVehiculeComponent;
  let fixture: ComponentFixture<InfosVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosVehiculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
