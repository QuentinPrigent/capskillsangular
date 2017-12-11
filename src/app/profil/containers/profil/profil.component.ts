import { UsersService } from './../../Services/users.service';
import { Component, OnInit } from '@angular/core';
import { single } from './data';
import { polar } from './polardata';

@Component({
  selector: 'skills-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  users: any;
  single: any[];
  polar: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
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
    this.service.getUsers().subscribe( (data) => this.users = data );
  }

  addUser() {

    const params = {
      'firstname':	'pierre',
      'lastname':	'ned',
      'email'	: 'pierre.ned@capgemini.com',
      'password'	 : 'jaimebnpparibas'
    };
    // console.log(params);
    this.service.addUser(params).subscribe((data) => console.log(data));
  }

}
