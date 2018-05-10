import { Component, OnInit } from '@angular/core';
import { UserData, Address } from '../user-data';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  users: UserData[];

  constructor() {
    this.users = [new UserData()];
    this.users[0].firstname = 'John';
    this.users[0].lastname = 'Smith';
    this.users[0].address = new Address();
    this.users[0].address.street = '123 Main Street';
    this.users[0].address.aptNum = '#2';
    this.users[0].address.city = 'Townsville';
    this.users[0].address.state = 'AA';
    this.users[0].address.ZIP = '13245';
    this.users[0].address.country = 'USA';
    this.users[0].phone = '+1 (234) 456 7890';
  }

  ngOnInit() {
  }

}
