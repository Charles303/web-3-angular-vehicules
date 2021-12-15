import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../vehicule';
import { VehiculesService } from '../vehicules.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-suppression-vehicule',
  templateUrl: './suppression-vehicule.component.html',
  styleUrls: ['./suppression-vehicule.component.css']
})
export class SuppressionVehiculeComponent implements OnInit {

  idVehicule: string = ''

  vehiculeSupprime: Vehicule = {nom: '', constructeur: '', origine: '', type: [], prix: 0, chevaux: 0, torque: 0, date_production: new Date(), accidente: false, financement: false}

  afficherMessageDelete: boolean = false

  constructor(private vehiculeService: VehiculesService) { }

  ngOnInit(): void {
  }

  onDelete(_id: string): void {
    if (_id) {
      console.log("Véhicule trouvé");
      this.vehiculeService.deleteVehicule(_id)
        .subscribe(resultat => {this.vehiculeSupprime = resultat; this.afficherMessageDelete = true}); 
      console.log("Véhicule supprimé");
    }
  }

}
