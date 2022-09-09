import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Role } from '../../../models/role.model';
import { RoleService } from '../../../services/role.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  roleId!: number;
  role: Role = new Role();

  constructor(
    private roleService: RoleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.roleId = this.route.snapshot.params['id'];

    this.roleService.getRoleById(this.roleId).subscribe(data => {
      console.log(data);
      this.role = data;
    }, error => console.log(error));
  }

  updateRole(){
    this.roleService.updateRole(this.roleId, this.role).subscribe(data => {
      console.log(data);
      this.role = new Role();
      this.goToRoleList();
    }, error => console.log(error));
  }

  goToRoleList(){
    //this.router.navigate(['${this.baseUrl}']);
    this.router.navigate(['/roles']);
  }

  onSubmit(){
    console.log("Done !");
    console.log(this.role);
    this.updateRole();
  }

}
