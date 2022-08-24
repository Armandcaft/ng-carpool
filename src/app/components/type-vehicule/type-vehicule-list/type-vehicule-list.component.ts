import { Component, OnInit } from '@angular/core';
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
    private typeVehiculeService: TypeVehiculeService
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

}
