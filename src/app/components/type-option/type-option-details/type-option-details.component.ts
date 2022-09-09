import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TypeOption } from '../../../models/administration/type-option.model';
import { TypeOptionService } from '../../../services/type-option.service';

@Component({
  selector: 'app-type-option-details',
  templateUrl: './type-option-details.component.html',
  styleUrls: ['./type-option-details.component.css']
})
export class TypeOptionDetailsComponent implements OnInit {

  typeOptionId!: number;
  typeOption!: TypeOption;

  constructor(
    private route: ActivatedRoute,
    private typeOptionService: TypeOptionService
  ) { }

  ngOnInit(): void {
    this.typeOptionId = this.route.snapshot.params['id'];

    this.typeOption = new TypeOption();
    this.typeOptionService.getTypeOptionById(this.typeOptionId).subscribe(data => {
      console.log(data);
      this.typeOption = data;
    });
  }

}
