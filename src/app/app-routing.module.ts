import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireAjoutComponent } from './formulaire-ajout/formulaire-ajout.component';
import { InfosVehiculeComponent } from './infos-vehicule/infos-vehicule.component';
import { SuppressionVehiculeComponent } from './suppression-vehicule/suppression-vehicule.component';

const routes: Routes = [
  {path: 'formulaire-ajout', component: FormulaireAjoutComponent},
  {path: 'infos-vehicules', component: InfosVehiculeComponent},
  {path: 'suppression-vehicule', component: SuppressionVehiculeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
