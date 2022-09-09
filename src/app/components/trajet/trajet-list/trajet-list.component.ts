import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Trajet } from '../../../models/booking/trajet.model';
import { TrajetService } from '../../../services/trajet.service';

@Component({
  selector: 'app-trajet-list',
  templateUrl: './trajet-list.component.html',
  styleUrls: ['./trajet-list.component.css']
})
export class TrajetListComponent implements OnInit {

  trajets: Trajet[] = [];

  constructor(
    private trajetService: TrajetService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTrajets();
  }

  /**
   * Get Trajet List from the service TypeScript file.
   */
   private getTrajets(){
    this.trajetService.getTrajetsList().subscribe(data => {
      this.trajets = data;
    });
  }

  trajetDetails(trajetId: number){
    this.router.navigate(['trajet-details', trajetId])
  }

  updateTrajet(trajetId: number){
    this.router.navigate(['update-trajet', trajetId])
  }

  deleteTrajet(trajetId: number){
    this.trajetService.deleteTrajet(trajetId).subscribe(data => {
      console.log(data);
      this.getTrajets();
    });
  }

}
