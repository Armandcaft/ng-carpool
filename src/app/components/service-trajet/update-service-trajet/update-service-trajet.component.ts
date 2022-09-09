import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ServiceTrajet } from '../../../models/booking/service-trajet.model';
import { ServiceTrajetService } from '../../../services/service-trajet.service';

@Component({
  selector: 'app-update-service-trajet',
  templateUrl: './update-service-trajet.component.html',
  styleUrls: ['./update-service-trajet.component.css']
})
export class UpdateServiceTrajetComponent implements OnInit {

  serviceTrajetId!: number;
  serviceTrajet: ServiceTrajet = new ServiceTrajet();

  constructor(
    private serviceTrajetService: ServiceTrajetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.serviceTrajetId = this.route.snapshot.params['id'];

    this.serviceTrajetService.getServiceTrajetById(this.serviceTrajetId).subscribe(data => {
      console.log(data);
      this.serviceTrajet = data;
    }, error => console.log(error));
  }

  updateServiceTrajet(){
    this.serviceTrajetService.updateServiceTrajet(this.serviceTrajetId, this.serviceTrajet).subscribe(data => {
      console.log(data);
      this.serviceTrajet = new ServiceTrajet();
      this.goToServiceTrajetList();
    }, error => console.log(error));
  }

  goToServiceTrajetList(){
    //this.router.navigate(['${this.baseUrl}']);
    this.router.navigate(['/serviceTrajets']);
  }

  onSubmit(){
    console.log("Done !");
    console.log(this.serviceTrajet);
    this.updateServiceTrajet();
  }

}
