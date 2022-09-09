import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PointArret } from '../models/booking/point-arret.model';

@Injectable({
  providedIn: 'root'
})
export class PointArretService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "http://localhost:8081/pointArret";
  }

  getPointArretsList(): Observable<PointArret[]>{
    let baseUrlGet = this.baseUrl+"/getAll";
    return this.httpClient.get<PointArret[]>(baseUrlGet)
  }

  createPointArret(pointArret: PointArret): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/create";
    return this.httpClient.post(baseUrlGet, pointArret)
  }

  getPointArretById(pointArretId: number): Observable<PointArret>{
    let baseUrlGet = this.baseUrl+"/get/" + pointArretId;
    console.log(baseUrlGet);
    return this.httpClient.get<PointArret>(baseUrlGet)
  }

  updatePointArret(pointArretId: number, pointArret: PointArret): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/update/" + pointArretId;
    return this.httpClient.put(baseUrlGet, pointArret)
  }

  deletePointArret(pointArretId: number): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/delete/" + pointArretId
    alert('Delete ?')
    return this.httpClient.delete(baseUrlGet)
    alert('Deleted !')
  }
}
