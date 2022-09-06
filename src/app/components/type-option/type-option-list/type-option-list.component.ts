import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TypeOption } from 'src/app/models/type-option.model';
import { TypeOptionService } from 'src/app/services/type-option.service';

@Component({
  selector: 'app-type-option-list',
  templateUrl: './type-option-list.component.html',
  styleUrls: ['./type-option-list.component.css']
})
export class TypeOptionListComponent implements OnInit {

  typeOptions: TypeOption[] = [];

  constructor(
    private typeOptionService: TypeOptionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTypeOptions();
  }

  /**
   * Get TypeOption List from the service TypeScript file.
   */
   private getTypeOptions(){
    this.typeOptionService.getTypeOptionsList().subscribe(data => {
      this.typeOptions = data;
    });
  }

  typeOptionDetails(typeOptionId: number){
    this.router.navigate(['typeOption-details', typeOptionId])
  }

  updateTypeOption(typeOptionId: number){
    this.router.navigate(['update-typeOption', typeOptionId])
  }

  deleteTypeOption(typeOptionId: number){
    this.typeOptionService.deleteTypeOption(typeOptionId).subscribe(data => {
      console.log(data);
      this.getTypeOptions();
    });
  }

}
