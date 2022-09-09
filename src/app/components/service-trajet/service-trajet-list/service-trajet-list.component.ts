import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceTrajet } from '../../../models/booking/service-trajet.model';
import { ServiceTrajetService } from '../../../services/service-trajet.service';

@Component({
  selector: 'app-service-trajet-list',
  templateUrl: './service-trajet-list.component.html',
  styleUrls: ['./service-trajet-list.component.css']
})
export class ServiceTrajetListComponent implements OnInit {

  serviceTrajets: ServiceTrajet[] = [];

  constructor(
    private serviceTrajetService: ServiceTrajetService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getServiceTrajets();
  }

  /**
   * Get ServiceTrajet List from the service TypeScript file.
   */
   private getServiceTrajets(){
    this.serviceTrajetService.getServiceTrajetsList().subscribe(data => {
      this.serviceTrajets = data;
    });
  }

  serviceTrajetDetails(serviceTrajetId: number){
    this.router.navigate(['serviceTrajet-details', serviceTrajetId])
  }

  updateServiceTrajet(serviceTrajetId: number){
    this.router.navigate(['update-serviceTrajet', serviceTrajetId])
  }

  deleteServiceTrajet(serviceTrajetId: number){
    this.serviceTrajetService.deleteServiceTrajet(serviceTrajetId).subscribe(data => {
      console.log(data);
      this.getServiceTrajets();
    });
  }

}
