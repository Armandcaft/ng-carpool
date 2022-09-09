import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Trajet } from '../../../models/booking/trajet.model';
import { TrajetService } from '../../../services/trajet.service';

@Component({
  selector: 'app-trajet-details',
  templateUrl: './trajet-details.component.html',
  styleUrls: ['./trajet-details.component.css']
})
export class TrajetDetailsComponent implements OnInit {

  trajetId!: number;
  trajet!: Trajet;

  constructor(
    private route: ActivatedRoute,
    private trajetService: TrajetService
  ) { }

  ngOnInit(): void {
    this.trajetId = this.route.snapshot.params['id'];

    this.trajet = new Trajet();
    this.trajetService.getTrajetById(this.trajetId).subscribe(data => {
      console.log(data);
      this.trajet = data;
    });
  }

}
