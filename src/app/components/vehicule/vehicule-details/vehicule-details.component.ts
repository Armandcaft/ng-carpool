import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Vehicule } from 'src/app/models/vehicule.model';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-vehicule-details',
  templateUrl: './vehicule-details.component.html',
  styleUrls: ['./vehicule-details.component.css']
})
export class VehiculeDetailsComponent implements OnInit {

  vehiculeId!: number;
  vehicule!: Vehicule;

  constructor(
    private route: ActivatedRoute,
    private vehiculeService: VehiculeService
  ) { }

  ngOnInit(): void {
    this.vehiculeId = this.route.snapshot.params['id'];

    this.vehicule = new Vehicule();
    this.vehiculeService.getVehiculeById(this.vehiculeId).subscribe(data => {
      console.log(data);
      this.vehicule = data;
    });
  }

}
