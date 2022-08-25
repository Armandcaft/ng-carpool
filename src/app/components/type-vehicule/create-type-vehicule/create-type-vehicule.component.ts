import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TypeVehicule } from 'src/app/models/type-vehicule.model';
import { TypeVehiculeService } from 'src/app/services/type-vehicule.service';

@Component({
  selector: 'app-create-type-vehicule',
  templateUrl: './create-type-vehicule.component.html',
  styleUrls: ['./create-type-vehicule.component.css']
})
export class CreateTypeVehiculeComponent implements OnInit {

  typeVehicule: TypeVehicule = new TypeVehicule();
  //private baseUrl = "http://localhost:8081/typeVehicule/getAll";

  constructor(
    private typeVehiculeService: TypeVehiculeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveTypeVehicule(){
    this.typeVehiculeService.createTypeVehicule(this.typeVehicule).subscribe( data => {
      console.log(data);
      this.goToTypeVehiculeList();
    },
    error => console.log(error));
  }

  goToTypeVehiculeList(){
    //this.router.navigate(['${this.baseUrl}']);
    this.router.navigate(['/typeVehicules']);
  }

  onSubmit(){
    console.log("Done !");
    console.log(this.typeVehicule);
    this.saveTypeVehicule();
  }

}
