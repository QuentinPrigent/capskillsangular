import { UsersService } from './../../../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../user';

@Component({
  selector: 'skills-tableaureferent',
  templateUrl: './tableaureferent.component.html',
  styleUrls: ['./tableaureferent.component.css']
})
export class TableaureferentComponent implements OnInit {

  currentUser: User;

  logout($event) {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    window.location.href = './login';
  }

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

}




