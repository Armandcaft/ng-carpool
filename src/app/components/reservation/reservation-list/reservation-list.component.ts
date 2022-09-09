import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Reservation } from '../../../models/booking/reservation.model';
import { ReservationService } from '../../../services/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor(
    private reservationService: ReservationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getReservations();
  }

  /**
   * Get Reservation List from the service TypeScript file.
   */
   private getReservations(){
    this.reservationService.getReservationsList().subscribe(data => {
      this.reservations = data;
    });
  }

  reservationDetails(reservationId: number){
    this.router.navigate(['reservation-details', reservationId])
  }

  updateReservation(reservationId: number){
    this.router.navigate(['update-reservation', reservationId])
  }

  deleteReservation(reservationId: number){
    this.reservationService.deleteReservation(reservationId).subscribe(data => {
      console.log(data);
      this.getReservations();
    });
  }

}
