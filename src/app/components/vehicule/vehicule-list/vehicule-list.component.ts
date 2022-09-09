import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vehicule } from '../../../models/administration/vehicule.model';
import { VehiculeService } from '../../../services/vehicule.service';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.css']
})
export class VehiculeListComponent implements OnInit {

  vehicules: Vehicule[] = [];

  constructor(
    private vehiculeService: VehiculeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getVehicules();

    /**
     * Default Transient insertion if no data found in db.
     */
  //   this.vehicules = [{
  //     "id": 10,
  //     "model": "Thybault",
  //     "description": "thybault001",
  //     "image": "car002.jpg",
  //     "state": true,
  //   },
  //   {
  //     "id": 30,
  //     "model": "Toyota",
  //     "description": "carllagaffe's car",
  //     "image": "carl0101.png",
  //     "state": false,
  //   }];
  }

  /**
   * Get Vehicule List from the service TypeScript file.
   */
  private getVehicules(){
    this.vehiculeService.getVehiculesList().subscribe(data => {
      this.vehicules = data;
    });
  }

  vehiculeDetails(vehiculeId: number){
    this.router.navigate(['vehicule-details', vehiculeId])
  }

  updateVehicule(vehiculeId: number){
    this.router.navigate(['update-vehicule', vehiculeId])
  }

  deleteVehicule(vehiculeId: number){
    this.vehiculeService.deleteVehicule(vehiculeId).subscribe(data => {
      console.log(data);
      this.getVehicules();
    });
  }

}
