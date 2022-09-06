import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Vehicule } from 'src/app/models/vehicule.model';
import { VehiculeService } from 'src/app/services/vehicule.service';

@Component({
  selector: 'app-update-vehicule',
  templateUrl: './update-vehicule.component.html',
  styleUrls: ['./update-vehicule.component.css']
})
export class UpdateVehiculeComponent implements OnInit {

  vehiculeId!: number;
  vehicule: Vehicule = new Vehicule();

  constructor(
    private vehiculeService: VehiculeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.vehiculeId = this.route.snapshot.params['id'];

    this.vehiculeService.getVehiculeById(this.vehiculeId).subscribe(data => {
      console.log(data);
      this.vehicule = data;
    }, error => console.log(error));
  }

  updateVehicule(){
    this.vehiculeService.updateVehicule(this.vehiculeId, this.vehicule).subscribe(data => {
      console.log(data);
      this.vehicule = new Vehicule();
      this.goToVehiculeList();
    }, error => console.log(error));
  }

  goToVehiculeList(){
    //this.router.navigate(['${this.baseUrl}']);
    this.router.navigate(['/vehicules']);
  }

  onSubmit(){
    console.log("Done !");
    console.log(this.vehicule);
    this.updateVehicule();
  }

}
