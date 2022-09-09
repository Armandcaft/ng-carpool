import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vehicule } from '../../../models/administration/vehicule.model';
import { VehiculeService } from '../../../services/vehicule.service';

@Component({
  selector: 'app-create-vehicule',
  templateUrl: './create-vehicule.component.html',
  styleUrls: ['./create-vehicule.component.css']
})
export class CreateVehiculeComponent implements OnInit {

  vehicule: Vehicule = new Vehicule();

  constructor(
    private vehiculeService: VehiculeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveVehicule(){
    this.vehiculeService.createVehicule(this.vehicule).subscribe( data => {
      console.log(data);
      this.goToVehiculeList();
    },
    error => console.log(error));
  }

  goToVehiculeList(){
    this.router.navigate(['/vehicules']);
  }

  onSubmit(){
    console.log("Form submission.. Done !");
    console.log(this.vehicule);
    this.saveVehicule();
  }

}
