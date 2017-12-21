import { Component, OnInit } from '@angular/core';
import { User } from '../../../user';

@Component({
  selector: 'skills-tableaurecherchecoll',
  templateUrl: './tableaurecherchecoll.component.html',
  styleUrls: ['./tableaurecherchecoll.component.css']
})
export class TableaurecherchecollComponent implements OnInit {

  currentUser: User;

  retourAccueilReferent($event) {
    window.location.href = './accueilreferent';
  }

  logout($event) {
    localStorage.removeItem('currentUser');
    this.currentUser = null;
    window.location.href = './login';
  }

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

}
