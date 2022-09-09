import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Role } from '../../../models/role.model';
import { RoleService } from '../../../services/role.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  role: Role = new Role();

  constructor(
    private roleService: RoleService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveRole(){
    this.roleService.createRole(this.role).subscribe( data => {
      console.log(data);
      this.goToRoleList();
    },
    error => console.log(error));
  }

  goToRoleList(){
    this.router.navigate(['/roles']);
  }

  onSubmit(){
    console.log("Form submission.. Done !");
    console.log(this.role);
    this.saveRole();
  }

}
