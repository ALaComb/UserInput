import { Component, OnInit, Injectable } from '@angular/core';
import { UserData } from '../user-data';

@Injectable()
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  users: UserData[];

  constructor(private user: UserData) { }


  ngOnInit() {
    this.users = [new UserData()];
    this.users[0].userid = 0;
    this.users[0].firstname = 'John';
    this.users[0].lastname = 'Smith';
    this.users[0].addressLineOne = '123 Main Street';
    this.users[0].addressLineTwo = '#2';
    this.users[0].city = 'Townsville';
    this.users[0].state = 'AA';
    this.users[0].zip = '13245';
    this.users[0].country = 'USA';
    this.users[0].phone = '+1 (234) 456 7890';
  }

}
