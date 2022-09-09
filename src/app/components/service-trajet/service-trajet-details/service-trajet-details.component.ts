import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServiceTrajet } from '../../../models/booking/service-trajet.model';
import { ServiceTrajetService } from '../../../services/service-trajet.service';

@Component({
  selector: 'app-service-trajet-details',
  templateUrl: './service-trajet-details.component.html',
  styleUrls: ['./service-trajet-details.component.css']
})
export class ServiceTrajetDetailsComponent implements OnInit {

  serviceTrajetId!: number;
  serviceTrajet!: ServiceTrajet;

  constructor(
    private route: ActivatedRoute,
    private serviceTrajetService: ServiceTrajetService
  ) { }

  ngOnInit(): void {
    this.serviceTrajetId = this.route.snapshot.params['id'];

    this.serviceTrajet = new ServiceTrajet();
    this.serviceTrajetService.getServiceTrajetById(this.serviceTrajetId).subscribe(data => {
      console.log(data);
      this.serviceTrajet = data;
    });
  }

}
