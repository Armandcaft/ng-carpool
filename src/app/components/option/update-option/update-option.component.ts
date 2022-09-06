import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Option } from 'src/app/models/option.model';
import { OptionService } from 'src/app/services/option.service';

@Component({
  selector: 'app-update-option',
  templateUrl: './update-option.component.html',
  styleUrls: ['./update-option.component.css']
})
export class UpdateOptionComponent implements OnInit {

  optionId!: number;
  option: Option = new Option();

  constructor(
    private optionService: OptionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.optionId = this.route.snapshot.params['id'];

    this.optionService.getOptionById(this.optionId).subscribe(data => {
      console.log(data);
      this.option = data;
    }, error => console.log(error));
  }

  updateOption(){
    this.optionService.updateOption(this.optionId, this.option).subscribe(data => {
      console.log(data);
      this.option = new Option();
      this.goToOptionList();
    }, error => console.log(error));
  }

  goToOptionList(){
    //this.router.navigate(['${this.baseUrl}']);
    this.router.navigate(['/options']);
  }

  onSubmit(){
    console.log("Done !");
    console.log(this.option);
    this.updateOption();
  }

}
