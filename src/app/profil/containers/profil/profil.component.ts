import { UsersService } from './../../../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../../../user';

@Component({
  selector: 'skills-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  users: any;
  skills: any;
  data: any;

  currentUser: User;

  constructor(private dao: UsersService, private route: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
/*     this.dao.getUsers().subscribe((data: any) => this.users = data);
    this.data = this.route.snapshot.data; */
  }

  private loadAllUsers() {
    this.dao.getAll().subscribe(users => { this.users = users; });
  }


/*   this.dao.getUsers()
  .subscribe(
    data => data.forEach(elt => this.users = data),
    err => console.error(`Erreur: `, err)
  ); */

/*   this.dao.getUsers()
    .subscribe(
      data => data.forEach(elt => console.log(elt)),
      err => console.error(`Erreur: `, err)
    ); */

/*   addUser() {
    const params = {
      'firstname':	'pierre',
      'lastname':	'ned',
      'email': 'pierre.ned@capgemini.com',
      'password': 'jaimebnpparibas'
    }; */
        // console.log(params);
        // this.service.addUser(params).subscribe((data) => console.log(data));
      }


