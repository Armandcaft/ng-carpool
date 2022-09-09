import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PointArret } from '../../../models/booking/point-arret.model';
import { PointArretService } from '../../../services/point-arret.service';

@Component({
  selector: 'app-create-point-arret',
  templateUrl: './create-point-arret.component.html',
  styleUrls: ['./create-point-arret.component.css']
})
export class CreatePointArretComponent implements OnInit {

  pointArret: PointArret = new PointArret();

  constructor(
    private pointArretService: PointArretService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  savePointArret(){
    this.pointArretService.createPointArret(this.pointArret).subscribe( data => {
      console.log(data);
      this.goToPointArretList();
    },
    error => console.log(error));
  }

  goToPointArretList(){
    this.router.navigate(['/pointArrets']);
  }

  onSubmit(){
    console.log("Form submission.. Done !");
    console.log(this.pointArret);
    this.savePointArret();
  }

}
