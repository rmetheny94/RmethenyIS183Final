import { Component, OnInit } from '@angular/core';
import { userService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UserComponent implements OnInit {

  beverages: Array<Object> = [];

  constructor(private router: Router, private userService: BeverageService) {
  }

  async ngOnInit() {
    this.beverages = [];
    await this.getUsers();
  }

  async getUsers() {
    const resp = await this.userService.getUsers();
    this.users = resp;
  }

  goToCreate() {
    this.router.navigate(['user-create']);
  }

  async deleteUser(id: string) {
    const resp = await this.Service.deleteUser(id);
    if (resp) {
      this.users = this.users.filter((user) => {
        return user['id'] !== id;
      });
    }
  }

}
