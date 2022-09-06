import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Option } from 'src/app/models/option.model';
import { OptionService } from 'src/app/services/option.service';

@Component({
  selector: 'app-create-option',
  templateUrl: './create-option.component.html',
  styleUrls: ['./create-option.component.css']
})
export class CreateOptionComponent implements OnInit {

  option: Option = new Option();

  constructor(
    private optionService: OptionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveOption(){
    this.optionService.createOption(this.option).subscribe( data => {
      console.log(data);
      this.goToOptionList();
    },
    error => console.log(error));
  }

  goToOptionList(){
    this.router.navigate(['/options']);
  }

  onSubmit(){
    console.log("Form submission.. Done !");
    console.log(this.option);
    this.saveOption();
  }

}
