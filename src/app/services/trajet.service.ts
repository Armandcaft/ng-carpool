import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trajet } from '../models/booking/trajet.model';

@Injectable({
  providedIn: 'root'
})
export class TrajetService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "http://localhost:8081/trajet";
  }

  getTrajetsList(): Observable<Trajet[]>{
    let baseUrlGet = this.baseUrl+"/getAll";
    return this.httpClient.get<Trajet[]>(baseUrlGet)
  }

  createTrajet(trajet: Trajet): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/create";
    return this.httpClient.post(baseUrlGet, trajet)
  }

  getTrajetById(trajetId: number): Observable<Trajet>{
    let baseUrlGet = this.baseUrl+"/get/" + trajetId;
    console.log(baseUrlGet);
    return this.httpClient.get<Trajet>(baseUrlGet)
  }

  updateTrajet(trajetId: number, trajet: Trajet): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/update/" + trajetId;
    return this.httpClient.put(baseUrlGet, trajet)
  }

  deleteTrajet(trajetId: number): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/delete/" + trajetId
    alert('Delete ?')
    return this.httpClient.delete(baseUrlGet)
    alert('Deleted !')
  }
}
