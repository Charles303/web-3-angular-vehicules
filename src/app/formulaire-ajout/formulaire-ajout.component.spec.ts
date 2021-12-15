import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAjoutComponent } from './formulaire-ajout.component';

describe('FormulaireAjoutComponent', () => {
  let component: FormulaireAjoutComponent;
  let fixture: ComponentFixture<FormulaireAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
