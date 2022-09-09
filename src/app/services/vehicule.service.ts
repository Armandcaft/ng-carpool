import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicule } from '../models/administration/vehicule.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "http://localhost:8080/vehicule";
  }

  getVehiculesList(): Observable<Vehicule[]>{
    let baseUrlGet = this.baseUrl+"/getAll";
    return this.httpClient.get<Vehicule[]>(baseUrlGet)
  }

  createVehicule(vehicule: Vehicule): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/create";
    return this.httpClient.post(baseUrlGet, vehicule)
  }

  getVehiculeById(vehiculeId: number): Observable<Vehicule>{
    let baseUrlGet = this.baseUrl+"/get/" + vehiculeId;
    console.log(baseUrlGet);
    return this.httpClient.get<Vehicule>(baseUrlGet)
  }

  updateVehicule(vehiculeId: number, vehicule: Vehicule): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/update/" + vehiculeId;
    return this.httpClient.put(baseUrlGet, vehicule)
  }

  deleteVehicule(vehiculeId: number): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/delete/" + vehiculeId
    alert('Delete ?')
    return this.httpClient.delete(baseUrlGet)
    alert('Deleted !')
  }
}
