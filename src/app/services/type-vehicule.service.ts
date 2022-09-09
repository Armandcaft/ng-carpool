import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeVehicule } from '../models/administration/type-vehicule.model';

@Injectable({
  providedIn: 'root'
})
export class TypeVehiculeService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "http://localhost:8080/typeVehicule";
  }

  getTypeVehiculesList(): Observable<TypeVehicule[]>{
    let baseUrlGet = this.baseUrl+"/getAll";
    return this.httpClient.get<TypeVehicule[]>(baseUrlGet)
  }

  createTypeVehicule(typeVehicule: TypeVehicule): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/create";
    return this.httpClient.post(baseUrlGet, typeVehicule)
  }

  getTypeVehiculeById(typeVehiculeId: number): Observable<TypeVehicule>{
    let baseUrlGet = this.baseUrl+"/get/" + typeVehiculeId;
    console.log(baseUrlGet);
    return this.httpClient.get<TypeVehicule>(baseUrlGet)
  }

  updateTypeVehicule(typeVehiculeId: number, typeVehicule: TypeVehicule): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/update/" + typeVehiculeId;
    return this.httpClient.put(baseUrlGet, typeVehicule)
  }

  deleteTypeVehicule(typeVehiculeId: number): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/delete/" + typeVehiculeId
    alert('Delete ?')
    return this.httpClient.delete(baseUrlGet)
    alert('Deleted !')
  }
}
