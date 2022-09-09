import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Option } from '../../../models/administration/option.model';
import { OptionService } from '../../../services/option.service';

@Component({
  selector: 'app-option-details',
  templateUrl: './option-details.component.html',
  styleUrls: ['./option-details.component.css']
})
export class OptionDetailsComponent implements OnInit {

  optionId!: number;
  option!: Option;

  constructor(
    private route: ActivatedRoute,
    private optionService: OptionService
  ) { }

  ngOnInit(): void {
    this.optionId = this.route.snapshot.params['id'];

    this.option = new Option();
    this.optionService.getOptionById(this.optionId).subscribe(data => {
      console.log(data);
      this.option = data;
    });
  }

}
