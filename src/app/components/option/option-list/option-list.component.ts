import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Option } from '../../../models/administration/option.model';
import { OptionService } from '../../../services/option.service';

@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.css']
})
export class OptionListComponent implements OnInit {

  options: Option[] = [];

  constructor(
    private optionService: OptionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getOptions();
  }

  /**
   * Get Option List from the service TypeScript file.
   */
   private getOptions(){
    this.optionService.getOptionsList().subscribe(data => {
      this.options = data;
    });
  }

  optionDetails(optionId: number){
    this.router.navigate(['option-details', optionId])
  }

  updateOption(optionId: number){
    this.router.navigate(['update-option', optionId])
  }

  deleteOption(optionId: number){
    this.optionService.deleteOption(optionId).subscribe(data => {
      console.log(data);
      this.getOptions();
    });
  }

}
