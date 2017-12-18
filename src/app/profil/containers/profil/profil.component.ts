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
  skills: any = [];
  data: any;

  currentUser: User;

  referent(event) {
    if (this.currentUser.referent === true) {
      window.location.href = '/tabconscomp';
    }else{
      alert("Vous n'êtes pas référent");
    }
  }

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
    this.skills = this.currentUser.skills;
    console.log(this.skills);
  }

}
