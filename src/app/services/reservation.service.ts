import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Reservation } from '../models/booking/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private baseUrl: string;

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "http://localhost:8081/reservation";
  }

  getReservationsList(): Observable<Reservation[]>{
    let baseUrlGet = this.baseUrl+"/getAll";
    return this.httpClient.get<Reservation[]>(baseUrlGet)
  }

  createReservation(reservation: Reservation): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/create";
    return this.httpClient.post(baseUrlGet, reservation)
  }

  getReservationById(reservationId: number): Observable<Reservation>{
    let baseUrlGet = this.baseUrl+"/get/" + reservationId;
    console.log(baseUrlGet);
    return this.httpClient.get<Reservation>(baseUrlGet)
  }

  updateReservation(reservationId: number, reservation: Reservation): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/update/" + reservationId;
    return this.httpClient.put(baseUrlGet, reservation)
  }

  deleteReservation(reservationId: number): Observable<Object>{
    let baseUrlGet = this.baseUrl+"/delete/" + reservationId
    alert('Delete ?')
    return this.httpClient.delete(baseUrlGet)
    alert('Deleted !')
  }
}
