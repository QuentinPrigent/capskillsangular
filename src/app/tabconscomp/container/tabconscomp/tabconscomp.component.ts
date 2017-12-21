import { User } from './../../../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills-tabconscomp',
  templateUrl: './tabconscomp.component.html',
  styleUrls: ['./tabconscomp.component.css']
})
export class TabconscompComponent implements OnInit {

  currentUser: User;

  retourAccueilReferent($event) {
    window.location.href = './accueilreferent';
  }

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

}
