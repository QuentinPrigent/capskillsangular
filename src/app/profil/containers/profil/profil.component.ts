import { UsersService } from './../../../users.service';
import { Component, OnInit } from '@angular/core';
import {single} from './data';
import {polar} from './polardata';
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
      window.location.href = '/accueilreferent';
<<<<<<< HEAD
    }else {
=======
    }else{
>>>>>>> 3ed922d9952c1b4def9b5f63e6f231a332334a9a
      alert('Vous n\'êtes pas référent');
    }
  }

  constructor(private dao: UsersService, private route: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.dao.getAll().subscribe(users => { this.users = users; });
    this.skills = this.currentUser.skills;
    console.log(this.skills);
  }

}
