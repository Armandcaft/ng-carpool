import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Role } from '../../../models/role.model';
import { RoleService } from '../../../services/role.service';

@Component({
  selector: 'app-role-details',
  templateUrl: './role-details.component.html',
  styleUrls: ['./role-details.component.css']
})
export class RoleDetailsComponent implements OnInit {

  roleId!: number;
  role!: Role;

  constructor(
    private route: ActivatedRoute,
    private roleService: RoleService
  ) { }

  ngOnInit(): void {
    this.roleId = this.route.snapshot.params['id'];

    this.role = new Role();
    this.roleService.getRoleById(this.roleId).subscribe(data => {
      console.log(data);
      this.role = data;
    });
  }

}
