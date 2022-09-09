import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Reservation } from '../../../models/booking/reservation.model';
import { ReservationService } from '../../../services/reservation.service';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.css']
})
export class UpdateReservationComponent implements OnInit {

  reservationId!: number;
  reservation: Reservation = new Reservation();

  constructor(
    private reservationService: ReservationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.reservationId = this.route.snapshot.params['id'];

    this.reservationService.getReservationById(this.reservationId).subscribe(data => {
      console.log(data);
      this.reservation = data;
    }, error => console.log(error));
  }

  updateReservation(){
    this.reservationService.updateReservation(this.reservationId, this.reservation).subscribe(data => {
      console.log(data);
      this.reservation = new Reservation();
      this.goToReservationList();
    }, error => console.log(error));
  }

  goToReservationList(){
    //this.router.navigate(['${this.baseUrl}']);
    this.router.navigate(['/reservations']);
  }

  onSubmit(){
    console.log("Done !");
    console.log(this.reservation);
    this.updateReservation();
  }

}
