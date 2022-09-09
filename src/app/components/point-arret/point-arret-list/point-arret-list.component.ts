import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PointArret } from '../../../models/booking/point-arret.model';
import { PointArretService } from '../../../services/point-arret.service';

@Component({
  selector: 'app-point-arret-list',
  templateUrl: './point-arret-list.component.html',
  styleUrls: ['./point-arret-list.component.css']
})
export class PointArretListComponent implements OnInit {

  pointArrets: PointArret[] = [];

  constructor(
    private pointArretService: PointArretService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPointArrets();
  }

  /**
   * Get PointArret List from the service TypeScript file.
   */
   private getPointArrets(){
    this.pointArretService.getPointArretsList().subscribe(data => {
      this.pointArrets = data;
    });
  }

  pointArretDetails(pointArretId: number){
    this.router.navigate(['pointArret-details', pointArretId])
  }

  updatePointArret(pointArretId: number){
    this.router.navigate(['update-pointArret', pointArretId])
  }

  deletePointArret(pointArretId: number){
    this.pointArretService.deletePointArret(pointArretId).subscribe(data => {
      console.log(data);
      this.getPointArrets();
    });
  }

}
