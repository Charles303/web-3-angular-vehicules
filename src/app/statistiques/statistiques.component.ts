import { Component, OnInit } from '@angular/core';
import { VehiculesService } from '../vehicules.service';
import { StatistiquePrix } from '../statistiquePrix';
import { StatistiqueNb } from '../statistiqueNb';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {

  statistiquePrix: StatistiquePrix[] = []

  displayedColumnsPrix: string[] = ['id', 'moyenne'];

  statistiqueNb: StatistiqueNb[] = []

  displayedColumnsNb: string[] = ['id', 'nbVehicules'];

  constructor(private vehiculeService: VehiculesService) { }

  ngOnInit(): void {
    this.getStatistiques();
  }

  getStatistiques(): void {
    this.vehiculeService.getVehiculeStatsPrixMoyen()
        .subscribe(
          resultat => {this.statistiquePrix = resultat;
            this.vehiculeService.getVehiculeStatsNbParConstructeur()
              .subscribe(resultat => this.statistiqueNb = resultat);
          }
          );
  }

}
