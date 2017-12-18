import { Component, OnInit } from '@angular/core';
import { User } from '../../../user';

@Component({
  selector: 'skills-tableaureferent',
  templateUrl: './tableaureferent.component.html',
  styleUrls: ['./tableaureferent.component.css']
})
export class TableaureferentComponent implements OnInit {

  currentUser: User;

  constructor() { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

}




