import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';

@Injectable()
export class UsersService {
  root = 'http://localhost:1214/users/';

  constructor(public http: HttpClient) { }

  private url(path: string) {
    return this.root + path;
  }
  private get(path: string) {
    return this.http.get(this.url(path));
  }

  login(email: string, password: string) {
    return this.get(`login?email=${email}&password=${password}`);
  }

  getTopPosts() {
    return this.http.get(this.root);
  }

  getAll() {
    return this.http.get<User[]>('http://localhost:1214/users/');
  }

  getById(id: number) {
    return this.http.get('http://localhost:1214/users/' + id);
  }

  getUsers() {
    return this.get('');
  }

  getSkills() {
    return this.get('display-skills/2');
  }

  addUser(params) {
    // tslint:disable-next-line:max-line-length
    return this.http.post(`http://localhost:1214/users/?firstname=sdwsdds&lastname=sdwsd&email=sddsd.taberly@capgemini.com&password=jaimelesbokits`, null );
  }

}
