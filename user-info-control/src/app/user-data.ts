import { Injectable } from '@angular/core';

@Injectable()
export class UserData {
    userid: number;
    firstname: string;
    lastname: string;
    addressLineOne: string;
    addressLineTwo: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    phone: string;

}
