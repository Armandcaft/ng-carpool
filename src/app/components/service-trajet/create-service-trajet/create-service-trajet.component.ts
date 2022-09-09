import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceTrajet } from '../../../models/booking/service-trajet.model';
import { ServiceTrajetService } from '../../../services/service-trajet.service';

@Component({
  selector: 'app-create-service-trajet',
  templateUrl: './create-service-trajet.component.html',
  styleUrls: ['./create-service-trajet.component.css']
})
export class CreateServiceTrajetComponent implements OnInit {

  serviceTrajet: ServiceTrajet = new ServiceTrajet();

  constructor(
    private serviceTrajetService: ServiceTrajetService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveServiceTrajet(){
    this.serviceTrajetService.createServiceTrajet(this.serviceTrajet).subscribe( data => {
      console.log(data);
      this.goToServiceTrajetList();
    },
    error => console.log(error));
  }

  goToServiceTrajetList(){
    this.router.navigate(['/serviceTrajets']);
  }

  onSubmit(){
    console.log("Form submission.. Done !");
    console.log(this.serviceTrajet);
    this.saveServiceTrajet();
  }

}
