// Currently breaks application due to an unknown StackTraceError

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { HttpHeaders } from '@angular/common/http';

import { UserData } from './user-data';

@Injectable()
export class UserInfoService {
  appURL: string;
  defaultHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    this.appURL = 'http://localhost:8080';
    this.defaultHeaders = new HttpHeaders();
    this.defaultHeaders = this.defaultHeaders.append('Content-Type', 'application/json');
  }

  getAll(): Observable<UserData[]> {
    return this .http.get(this.appURL + '/user-info', {
      headers: this.defaultHeaders, withCredentials: true
    })
    .map(
      resp => resp as UserData[]
    );
  }

  update(user: UserData): Observable<UserData> {
    const body = JSON.stringify(user);
    return this.http.put(this.appURL + '/user-info', body, {
      headers: this.defaultHeaders, withCredentials: true
    })
      .map(
      resp => resp as UserData
      );
  }

  add(user: UserData): Observable<UserData> {
    const body = JSON.stringify(user);
    return this.http.post(this.appURL + '/user-info', body, {
      headers: this.defaultHeaders, withCredentials: true
    })
      .map(
      resp => resp as UserData
      );
  }

  delete(user: UserData): Observable<UserData> {
    const body = JSON.stringify(user);
    return this.http.delete(this.appURL + '/user-info', {
      headers: this.defaultHeaders, withCredentials: true
    })
      .map(
      resp => resp as UserData
      );
  }

}
