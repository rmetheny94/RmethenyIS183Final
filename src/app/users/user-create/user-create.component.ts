import { Component, OnInit } from '@angular/core';
import { BeverageService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent implements OnInit {

  user: Object = {};

  constructor(
    private userService: BeverageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = {};
  }

  async createUser(user: Object) {
    const resp = await this.userService.addBeverage(user);
    if (resp) {
      this.router.navigate(['/user']);
    }
  }

}
