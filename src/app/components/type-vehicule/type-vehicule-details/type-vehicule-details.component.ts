import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TypeVehicule } from '../../../models/administration/type-vehicule.model';
import { TypeVehiculeService } from '../../../services/type-vehicule.service';

@Component({
  selector: 'app-type-vehicule-details',
  templateUrl: './type-vehicule-details.component.html',
  styleUrls: ['./type-vehicule-details.component.css']
})
export class TypeVehiculeDetailsComponent implements OnInit {

  typeVehiculeId!: number;
  typeVehicule!: TypeVehicule;

  constructor(
    private route: ActivatedRoute,
    private typeVehiculeService: TypeVehiculeService
  ) { }

  ngOnInit(): void {
    this.typeVehiculeId = this.route.snapshot.params['id'];

    this.typeVehicule = new TypeVehicule();
    this.typeVehiculeService.getTypeVehiculeById(this.typeVehiculeId).subscribe(data => {
      console.log(data);
      this.typeVehicule = data;
    });
  }

}
