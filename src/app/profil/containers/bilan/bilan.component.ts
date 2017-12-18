import { UsersService } from './../../Services/users.service';
import { Component, OnInit } from '@angular/core';
import { single } from './data';
import { polar } from './polardata';

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

  constructor(public service: UsersService) {
    Object.assign(this, {single});
    Object.assign(this, {polar});
   }
   onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }
}
