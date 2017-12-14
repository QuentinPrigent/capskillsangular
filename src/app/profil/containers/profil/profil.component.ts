import { UsersService } from './../../../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'skills-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  users: any;
  skills: any;

  data: any;

  constructor(private dao: UsersService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dao.getUsers().subscribe((data: any) => this.users = data);
    this.dao.getSkills().subscribe((dataskills: any) => this.skills = dataskills);
    this.data = this.route.snapshot.data;
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


