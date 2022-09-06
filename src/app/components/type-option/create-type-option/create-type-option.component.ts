import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TypeOption } from 'src/app/models/type-option.model';
import { TypeOptionService } from 'src/app/services/type-option.service';

@Component({
  selector: 'app-create-type-option',
  templateUrl: './create-type-option.component.html',
  styleUrls: ['./create-type-option.component.css']
})
export class CreateTypeOptionComponent implements OnInit {

  typeOption: TypeOption = new TypeOption();

  constructor(
    private typeOptionService: TypeOptionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveTypeOption(){
    this.typeOptionService.createTypeOption(this.typeOption).subscribe( data => {
      console.log(data);
      this.goToTypeOptionList();
    },
    error => console.log(error));
  }

  goToTypeOptionList(){
    this.router.navigate(['/typeOptions']);
  }

  onSubmit(){
    console.log("Form submission.. Done !");
    console.log(this.typeOption);
    this.saveTypeOption();
  }

}
