import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Reservation } from '../../../models/booking/reservation.model';
import { ReservationService } from '../../../services/reservation.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent implements OnInit {

  reservation: Reservation = new Reservation();

  constructor(
    private reservationService: ReservationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveReservation(){
    this.reservationService.createReservation(this.reservation).subscribe( data => {
      console.log(data);
      this.goToReservationList();
    },
    error => console.log(error));
  }

  goToReservationList(){
    this.router.navigate(['/reservations']);
  }

  onSubmit(){
    console.log("Form submission.. Done !");
    console.log(this.reservation);
    this.saveReservation();
  }

}
