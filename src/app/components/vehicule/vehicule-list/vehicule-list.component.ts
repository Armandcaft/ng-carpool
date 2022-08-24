import { Component, OnInit } from '@angular/core';
import { Vehicule } from 'src/app/models/vehicule.model';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-vehicule-list',
  templateUrl: './vehicule-list.component.html',
  styleUrls: ['./vehicule-list.component.css']
})
export class VehiculeListComponent implements OnInit {

  vehicules: Vehicule[] = [];

  constructor(
    private vehiculeService: VehiculeService
  ) { }

  ngOnInit(): void {
    this.getVehicules();

    /**
     * Default Transient insertion if no data found in db.
     */
    this.vehicules = [{
      "id": 10,
      "model": "Thybault",
      "description": "thybault001",
      "image": "car002.jpg",
      "state": true,
    },
    {
      "id": 30,
      "model": "Toyota",
      "description": "carllagaffe's car",
      "image": "carl0101.png",
      "state": false,
    }];
  }

  /**
   * Get Vehicule List from the service TypeScript file.
   */
  private getVehicules(){
    this.vehiculeService.getVehiculesList().subscribe(data => {
      this.vehicules = data;
    });
  }

}