import { Component, OnInit } from '@angular/core';
import { Vehicule } from '../vehicule';
import { VehiculesService } from '../vehicules.service';
import { NgForm } from '@angular/forms';
import { Traitement } from '../Liste_traitement';
import { Proprietaire } from '../Proprietaire';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-formulaire-ajout',
  templateUrl: './formulaire-ajout.component.html',
  styleUrls: ['./formulaire-ajout.component.css']
})
export class FormulaireAjoutComponent implements OnInit {

  newVehicule: Vehicule = {nom: '', constructeur: '', origine: '', type: [], prix: 0, chevaux: 0, torque: 0, date_production: new Date(), accidente: false, financement: false}

  type: string = ''

  date: Date = new Date()

  accidenteCoche = false
  financementCoche = false

  traitement: Traitement = {nom_traitement: '', prix: 0}
  nom_traitement: string = ''
  prix_traitement: number = 0

  proprietaire: Proprietaire = {prenom: '', nom: '', telephone: ''}
  prenom_proprietaire: string = ''
  nom_proprietaire: string = ''
  telephone_proprietaire: string = ''

  afficherMessageAjout = false

  constructor(private vehiculeService: VehiculesService) { }

  ngOnInit(): void {
  }

  onAdd(vehiculeFormAjout: NgForm) {
    if(vehiculeFormAjout.valid) {
      
      console.log("ajout du nouveau véhicule: " + this.newVehicule.nom + ', ' + this.newVehicule.constructeur +
      ', ' + this.newVehicule.origine + ', ' + this.newVehicule.type + ', ' + this.newVehicule.prix + ', ' + this.newVehicule.chevaux +
      ', ' + this.newVehicule.torque + ', ' + this.newVehicule.date_production + ', ' + this.newVehicule.accidente + ', ' +
      ', ' + this.newVehicule.financement + ', ' + this.newVehicule.liste_traitement + ', ' + this.newVehicule.liste_proprietaire);
      this.vehiculeService.addVehicule(this.newVehicule)
          .subscribe(vehicule  => { vehiculeFormAjout.resetForm(); this.afficherMessageAjout = true});
    }

  }

  ajouterType(){
    this.newVehicule.type.push(this.type);
    this.type = '';
    console.log("ajout du type: " + this.newVehicule.type);
  }

  ajouterDate(){
    this.newVehicule.date_production = this.date;
    console.log("ajout de la date: " + this.newVehicule.date_production);
  }

  changerAccidente(){
    this.newVehicule.accidente = !this.accidenteCoche;
    console.log("changement accidenté: " + this.newVehicule.accidente);
  }

  changerFinancement(){
    this.newVehicule.financement = !this.financementCoche;
    console.log("changement financement: " + this.newVehicule.financement);
  }

  ajouterListeTraitement(){
    this.traitement.nom_traitement = this.nom_traitement;
    this.traitement.prix = this.prix_traitement;
    console.log("this.traitement: " + this.traitement.nom_traitement + ', ' + this.traitement.prix);

    if (!this.newVehicule.liste_traitement){
      this.newVehicule.liste_traitement = [{nom_traitement: this.traitement.nom_traitement, prix: this.traitement.prix}]
    }
    else {
      this.newVehicule.liste_traitement?.push(this.traitement);
    }
    console.log("liste des traitement: " + this.newVehicule.liste_traitement);
  }

  ajouterListeProprietaire(){
    this.proprietaire.prenom = this.prenom_proprietaire;
    this.proprietaire.nom = this.nom_proprietaire;
    this.proprietaire.telephone = this.telephone_proprietaire;
    console.log("this.proprietaire: " + this.proprietaire.prenom + ", " + this.proprietaire.nom + ', ' + this.proprietaire.telephone);

    if (!this.newVehicule.liste_proprietaire){
      this.newVehicule.liste_proprietaire = [{prenom: this.proprietaire.prenom, nom: this.proprietaire.nom, telephone: this.proprietaire.telephone}]
    }
    else {
      this.newVehicule.liste_proprietaire?.push(this.proprietaire);
    }
    console.log("ajout du proriétaire: " + this.newVehicule.liste_proprietaire);
  }

}
