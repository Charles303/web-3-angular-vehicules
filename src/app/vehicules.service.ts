import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehicule } from './vehicule';
import { StatistiquePrix } from './statistiquePrix';
import { StatistiqueNb } from './statistiqueNb';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VehiculesService {
  vehiculesUrl = "https://api-vehicules.herokuapp.com/";

  constructor(private http: HttpClient) { }

  //Get
  getVehicules(): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(this.vehiculesUrl + 'vehicules');
  }

  getVehiculeId(id: string): Observable<Vehicule[]> {
    return this.http.get<Vehicule[]>(this.vehiculesUrl + 'vehicules/id/' + id, httpOptions);
  }

  getVehiculePrix(prix1: number, prix2: number): Observable<Vehicule> {
    return this.http.get<Vehicule>(this.vehiculesUrl + 'prix/' + prix1 + '/' + prix2, httpOptions);
  }

  getVehiculeType(type: string): Observable<Vehicule> {
    return this.http.get<Vehicule>(this.vehiculesUrl + 'type/' + type, httpOptions);
  }

  //Stats
  getVehiculeStatsPrixMoyen(): Observable<StatistiquePrix[]> {
    return this.http.get<StatistiquePrix[]>(this.vehiculesUrl + 'vehicules/stats/prix-moyen-type', httpOptions);
  }

  getVehiculeStatsNbParConstructeur(): Observable<StatistiqueNb[]> {
    return this.http.get<StatistiqueNb[]>(this.vehiculesUrl + 'vehicules/stats/nb-par-constructeur', httpOptions);
  }

  //Post
  addVehicule(vehicule: Vehicule): Observable<Vehicule> {
    return this.http.post<Vehicule>(this.vehiculesUrl + 'vehicules' , vehicule, httpOptions);
  }

  //Patch
  updateVehicule(vehicule: Vehicule): Observable<any> {
    const id = vehicule._id;
    return this.http.put<Vehicule>(this.vehiculesUrl + 'vehicules/' + id, vehicule, httpOptions);
  }

  //Delete
  deleteVehicule(id: string): Observable<Vehicule> {
    return this.http.delete<Vehicule>(this.vehiculesUrl + 'vehicules/' + id, httpOptions);
  }


}
