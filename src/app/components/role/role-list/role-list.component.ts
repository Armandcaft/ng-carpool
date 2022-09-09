import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Role } from '../../../models/role.model';
import { RoleService } from '../../../services/role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  roles: Role[] = [];

  constructor(
    private roleService: RoleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getRoles();
  }

  /**
   * Get Role List from the service TypeScript file.
   */
   private getRoles(){
    this.roleService.getRolesList().subscribe(data => {
      this.roles = data;
    });
  }

  roleDetails(roleId: number){
    this.router.navigate(['role-details', roleId])
  }

  updateRole(roleId: number){
    this.router.navigate(['update-role', roleId])
  }

  deleteRole(roleId: number){
    this.roleService.deleteRole(roleId).subscribe(data => {
      console.log(data);
      this.getRoles();
    });
  }

}
