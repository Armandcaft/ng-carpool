import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TypeVehicule } from 'src/app/models/type-vehicule.model';
import { TypeVehiculeService } from 'src/app/services/type-vehicule.service';

@Component({
  selector: 'app-type-vehicule-list',
  templateUrl: './type-vehicule-list.component.html',
  styleUrls: ['./type-vehicule-list.component.css']
})
export class TypeVehiculeListComponent implements OnInit {

  typeVehicules: TypeVehicule[] = [];

  constructor(
    private typeVehiculeService: TypeVehiculeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTypeVehicules();

    /**
     * Default Transient insertion if no data found in db.
     */
    this.typeVehicules = [{
      "id": 10,
      "name": "Thybault"
    },
    {
      "id": 30,
      "name": "Toyota"
    }];
  }

  /**
   * Get TypeVehicule List from the service TypeScript file.
   */
  private getTypeVehicules(){
    this.typeVehiculeService.getTypeVehiculesList().subscribe(data => {
      // console.log(data);
      this.typeVehicules = data;
      // alert(this.typeVehicules);
    });
  }

  typeVehiculeDetails(typeVehiculeId: number){
    this.router.navigate(['type-vehicule-details', typeVehiculeId])
  }

  updateTypeVehicule(typeVehiculeId: number){
    this.router.navigate(['update-type-vehicule', typeVehiculeId])
  }

  deleteTypeVehicule(typeVehiculeId: number){
    this.typeVehiculeService.deleteTypeVehicule(typeVehiculeId).subscribe(data => {
      console.log(data);
      this.getTypeVehicules();
    });
  }

}
