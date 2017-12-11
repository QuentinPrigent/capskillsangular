import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {

  constructor(public http: HttpClient) { }

  getUsers() {
    return this.http.get('http://localhost:1214/users/');
  }

  addUser(params) {

    // tslint:disable-next-line:max-line-length
    return this.http.post(`http://localhost:1214/users/?firstname=sdwsdds&lastname=sdwsd&email=sddsd.taberly@capgemini.com&password=jaimelesbokits`, null );
  }

}
