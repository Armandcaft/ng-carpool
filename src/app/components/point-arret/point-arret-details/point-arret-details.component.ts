import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PointArret } from '../../../models/booking/point-arret.model';
import { PointArretService } from '../../../services/point-arret.service';

@Component({
  selector: 'app-point-arret-details',
  templateUrl: './point-arret-details.component.html',
  styleUrls: ['./point-arret-details.component.css']
})
export class PointArretDetailsComponent implements OnInit {

  pointArretId!: number;
  pointArret!: PointArret;

  constructor(
    private route: ActivatedRoute,
    private pointArretService: PointArretService
  ) { }

  ngOnInit(): void {
    this.pointArretId = this.route.snapshot.params['id'];

    this.pointArret = new PointArret();
    this.pointArretService.getPointArretById(this.pointArretId).subscribe(data => {
      console.log(data);
      this.pointArret = data;
    });
  }

}
