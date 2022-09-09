import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PointArret } from '../../../models/booking/point-arret.model';
import { PointArretService } from '../../../services/point-arret.service';

@Component({
  selector: 'app-update-point-arret',
  templateUrl: './update-point-arret.component.html',
  styleUrls: ['./update-point-arret.component.css']
})
export class UpdatePointArretComponent implements OnInit {

  pointArretId!: number;
  pointArret: PointArret = new PointArret();

  constructor(
    private pointArretService: PointArretService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pointArretId = this.route.snapshot.params['id'];

    this.pointArretService.getPointArretById(this.pointArretId).subscribe(data => {
      console.log(data);
      this.pointArret = data;
    }, error => console.log(error));
  }

  updatePointArret(){
    this.pointArretService.updatePointArret(this.pointArretId, this.pointArret).subscribe(data => {
      console.log(data);
      this.pointArret = new PointArret();
      this.goToPointArretList();
    }, error => console.log(error));
  }

  goToPointArretList(){
    //this.router.navigate(['${this.baseUrl}']);
    this.router.navigate(['/pointArrets']);
  }

  onSubmit(){
    console.log("Done !");
    console.log(this.pointArret);
    this.updatePointArret();
  }

}
