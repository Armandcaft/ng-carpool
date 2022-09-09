import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Trajet } from '../../../models/booking/trajet.model';
import { TrajetService } from '../../../services/trajet.service';

@Component({
  selector: 'app-create-trajet',
  templateUrl: './create-trajet.component.html',
  styleUrls: ['./create-trajet.component.css']
})
export class CreateTrajetComponent implements OnInit {

  trajet: Trajet = new Trajet();

  constructor(
    private trajetService: TrajetService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveTrajet(){
    this.trajetService.createTrajet(this.trajet).subscribe( data => {
      console.log(data);
      this.goToTrajetList();
    },
    error => console.log(error));
  }

  goToTrajetList(){
    this.router.navigate(['/trajets']);
  }

  onSubmit(){
    console.log("Form submission.. Done !");
    console.log(this.trajet);
    this.saveTrajet();
  }

}
