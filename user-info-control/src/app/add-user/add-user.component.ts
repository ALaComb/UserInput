import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-data';
import { UserInfoService } from '../user-info.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UserInfoService, HttpClient]
})
export class AddUserComponent implements OnInit {

  firstname: string;
  lastname: string;
  addressLineOne: string;
  addressLineTwo: string;
  addressCity: string;
  addressState: string;
  addressZip: string;
  addressCountry: string;
  phoneNumber: string;

  constructor(private service: UserInfoService, private router: Router) {
    console.log('In constructor');
  }

  ngOnInit() {
    console.log('In ngOnInit');
  }

  addUserInfo() {
    console.log('In addUserInfo');
    const newUser = new UserData();
    newUser.firstname = this.firstname;
    newUser.lastname = this.lastname;
    newUser.address.street = this.addressLineOne;
    newUser.address.aptNum = this.addressLineTwo;
    newUser.address.city = this.addressCity;
    newUser.address.state = this.addressState;
    newUser.address.ZIP = this.addressZip;
    newUser.address.country = this.addressCountry;
    newUser.phone = this.phoneNumber;

    this.service.add(newUser).subscribe(resp => {
      this.router.navigate(['']);
    });
  }

}
