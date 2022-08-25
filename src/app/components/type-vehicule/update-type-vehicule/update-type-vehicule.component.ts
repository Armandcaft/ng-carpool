import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeVehicule } from 'src/app/models/type-vehicule.model';
import { TypeVehiculeService } from 'src/app/services/type-vehicule.service';

@Component({
  selector: 'app-update-type-vehicule',
  templateUrl: './update-type-vehicule.component.html',
  styleUrls: ['./update-type-vehicule.component.css']
})
export class UpdateTypeVehiculeComponent implements OnInit {

  typeVehiculeId!: number;
  typeVehicule: TypeVehicule = new TypeVehicule();

  constructor(
    private typeVehiculeService: TypeVehiculeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.typeVehiculeId = this.route.snapshot.params['id'];

    this.typeVehiculeService.getTypeVehiculeById(this.typeVehiculeId).subscribe(data => {
      console.log(data);
      this.typeVehicule = data;
    }, error => console.log(error));
  }

  updateTypeVehicule(){
    this.typeVehiculeService.updateTypeVehicule(this.typeVehiculeId, this.typeVehicule).subscribe(data => {
      console.log(data);
      this.typeVehicule = new TypeVehicule();
      this.goToTypeVehiculeList();
    }, error => console.log(error));
  }

  goToTypeVehiculeList(){
    //this.router.navigate(['${this.baseUrl}']);
    this.router.navigate(['/typeVehicules']);
  }

  onSubmit(){
    console.log("Done !");
    console.log(this.typeVehicule);
    this.updateTypeVehicule();
  }

}
