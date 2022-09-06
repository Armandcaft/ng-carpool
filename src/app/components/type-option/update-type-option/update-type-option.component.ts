import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TypeOption } from 'src/app/models/type-option.model';
import { TypeOptionService } from 'src/app/services/type-option.service';

@Component({
  selector: 'app-update-type-option',
  templateUrl: './update-type-option.component.html',
  styleUrls: ['./update-type-option.component.css']
})
export class UpdateTypeOptionComponent implements OnInit {

  typeOptionId!: number;
  typeOption: TypeOption = new TypeOption();

  constructor(
    private typeOptionService: TypeOptionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.typeOptionId = this.route.snapshot.params['id'];

    this.typeOptionService.getTypeOptionById(this.typeOptionId).subscribe(data => {
      console.log(data);
      this.typeOption = data;
    }, error => console.log(error));
  }

  updateTypeOption(){
    this.typeOptionService.updateTypeOption(this.typeOptionId, this.typeOption).subscribe(data => {
      console.log(data);
      this.typeOption = new TypeOption();
      this.goToTypeOptionList();
    }, error => console.log(error));
  }

  goToTypeOptionList(){
    //this.router.navigate(['${this.baseUrl}']);
    this.router.navigate(['/typeOptions']);
  }

  onSubmit(){
    console.log("Done !");
    console.log(this.typeOption);
    this.updateTypeOption();
  }

}
