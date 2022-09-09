import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ServiceTrajet } from '../models/booking/service-trajet.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceTrajetService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "http://localhost:8081/serviceTrajet";
  }

  getServiceTrajetsList(): Observable<ServiceTrajet[]>{
    let baseUrlGet = this.baseUrl+"/getAll";
    return this.httpClient.get<ServiceTrajet[]>(baseUrlGet)
  }

  createServiceTrajet(serviceTrajet: ServiceTrajet): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/create";
    return this.httpClient.post(baseUrlGet, serviceTrajet)
  }

  getServiceTrajetById(serviceTrajetId: number): Observable<ServiceTrajet>{
    let baseUrlGet = this.baseUrl+"/get/" + serviceTrajetId;
    console.log(baseUrlGet);
    return this.httpClient.get<ServiceTrajet>(baseUrlGet)
  }

  updateServiceTrajet(serviceTrajetId: number, serviceTrajet: ServiceTrajet): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/update/" + serviceTrajetId;
    return this.httpClient.put(baseUrlGet, serviceTrajet)
  }

  deleteServiceTrajet(serviceTrajetId: number): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/delete/" + serviceTrajetId
    alert('Delete ?')
    return this.httpClient.delete(baseUrlGet)
    alert('Deleted !')
  }
}
