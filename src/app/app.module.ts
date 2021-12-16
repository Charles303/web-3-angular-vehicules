import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnteteComponent } from './entete/entete.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { InfosVehiculeComponent } from './infos-vehicule/infos-vehicule.component';
import { FormulaireAjoutComponent } from './formulaire-ajout/formulaire-ajout.component';

import { VehiculesService } from './vehicules.service';
import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SuppressionVehiculeComponent } from './suppression-vehicule/suppression-vehicule.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    PiedDePageComponent,
    InfosVehiculeComponent,
    FormulaireAjoutComponent,
    SuppressionVehiculeComponent,
    StatistiquesComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    MatTableModule,
    MatCheckboxModule
  ],
  providers: [VehiculesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
