import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();

    /**
     * Default Transient insertion if no data found in db.
     */
    this.users = [{
      "id": 10,
      "name": "Thybault",
      "username": "thybault001",
      "password": "Thybault001",
      "state": true,
    },
    {
      "id": 30,
      "name": "Carl",
      "username": "carllagaffe",
      "password": "carl0101",
      "state": false,
    }];
  }

  /**
   * Get User List from the service TypeScript file.
   */
  private getUsers(){
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
    });
  }

}
