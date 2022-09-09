import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Reservation } from '../../../models/booking/reservation.model';
import { ReservationService } from '../../../services/reservation.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {

  reservationId!: number;
  reservation!: Reservation;

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    this.reservationId = this.route.snapshot.params['id'];

    this.reservation = new Reservation();
    this.reservationService.getReservationById(this.reservationId).subscribe(data => {
      console.log(data);
      this.reservation = data;
    });
  }

}
