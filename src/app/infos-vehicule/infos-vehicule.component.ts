import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../vehicule';
import { VehiculesService } from '../vehicules.service';
import {MatTable} from '@angular/material/table';  // Permet de mettre à jour les données du tableau 

@Component({
  selector: 'app-infos-vehicule',
  templateUrl: './infos-vehicule.component.html',
  styleUrls: ['./infos-vehicule.component.css']
})
export class InfosVehiculeComponent implements OnInit {

  vehicules: Vehicule[] = [];

  displayedColumns: string[] = ['id', 'nom', 'constructeur', 'origine', 'type', 'prix', 'chevaux', 'torque', 'date_production', 'accidente', 'financement', 'liste_traitement', 'liste_proprietaire'];

  constructor(private vehiculeService: VehiculesService) { }

  ngOnInit(): void {
    this.getVehicules();
  }

  getVehicules(): void {
    this.vehiculeService.getVehicules()
        .subscribe(resultat => this.vehicules = resultat);
  }

}
