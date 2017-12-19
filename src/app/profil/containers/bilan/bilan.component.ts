import { UsersService } from './../../../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { single } from './data';
import { polar } from './polardata';

import { User } from '../../../user';

@Component({
  selector: 'skills-bilan',
  templateUrl: './bilan.component.html',
  styleUrls: ['./bilan.component.css']
})
export class BilanComponent implements OnInit {

  users: any;
  single: any[];
  polar: any[];
  multi: any[];

  currentUser: User;

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  retourProfil($event) {
    window.location.href = './TableauCompetenceComponent';
  }

  constructor(private service: UsersService, private route: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    Object.assign(this, {single});
    Object.assign(this, {polar});
   }
   onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
