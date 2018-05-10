import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userID: String;
  password: String;
  message: String;
  incorrectCredentials = 'The UserID/password combination was not recognized.';

  constructor(private router: Router) { }

  ngOnInit() {
  }

// For testing purposes, the login credentials are hard-coded into the application. admin:admin
  verify() {
    if (this.userID === 'admin' && this.password === 'admin') {
      this.router.navigate(['home']);
    } else {
      this.message = this.incorrectCredentials;
    }
  }

}
