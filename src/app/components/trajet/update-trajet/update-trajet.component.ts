import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Trajet } from '../../../models/booking/trajet.model';
import { TrajetService } from '../../../services/trajet.service';

@Component({
  selector: 'app-update-trajet',
  templateUrl: './update-trajet.component.html',
  styleUrls: ['./update-trajet.component.css']
})
export class UpdateTrajetComponent implements OnInit {

  trajetId!: number;
  trajet: Trajet = new Trajet();

  constructor(
    private trajetService: TrajetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.trajetId = this.route.snapshot.params['id'];

    this.trajetService.getTrajetById(this.trajetId).subscribe(data => {
      console.log(data);
      this.trajet = data;
    }, error => console.log(error));
  }

  updateTrajet(){
    this.trajetService.updateTrajet(this.trajetId, this.trajet).subscribe(data => {
      console.log(data);
      this.trajet = new Trajet();
      this.goToTrajetList();
    }, error => console.log(error));
  }

  goToTrajetList(){
    //this.router.navigate(['${this.baseUrl}']);
    this.router.navigate(['/trajets']);
  }

  onSubmit(){
    console.log("Done !");
    console.log(this.trajet);
    this.updateTrajet();
  }

}
