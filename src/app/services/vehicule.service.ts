import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicule } from '../models/vehicule.model';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "http://localhost:8081/vehicule/getAll";
  }

  getVehiculesList(): Observable<Vehicule[]>{
    return this.httpClient.get<Vehicule[]>(this.baseUrl)
  }
}
