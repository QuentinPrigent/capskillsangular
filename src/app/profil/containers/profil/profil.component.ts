import { UsersService } from './../../../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skills-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  users: any;
  skills: any;

  constructor(private dao: UsersService) {
  }

  ngOnInit() {
    this.dao.getUsers().subscribe((data: any) => this.users = data);
    this.dao.getSkills().subscribe((dataskills: any) => this.skills = dataskills);
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


