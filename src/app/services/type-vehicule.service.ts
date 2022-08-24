import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeVehicule } from '../models/type-vehicule.model';

@Injectable({
  providedIn: 'root'
})
export class TypeVehiculeService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "http://localhost:8081/typeVehicule/getAll";
  }

  getTypeVehiculesList(): Observable<TypeVehicule[]>{
    return this.httpClient.get<TypeVehicule[]>(this.baseUrl)
  }
}
