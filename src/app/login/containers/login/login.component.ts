import { UsersService } from './../../../users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core/src/metadata/view';
import { RouterLink } from '@angular/router/src/directives/router_link';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'skills-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  data: any;

  model: any = {};

  getErrorMessage() {
    return this.email.hasError('required') ? 'Vous devez rentrer un email' :
        this.email.hasError('email') ? 'L\'email n\'est pas valide' :
            '';
  }

  login(event) {
    if (this.email.valid && this.password.valid) {
      this.dao.login(this.email.value, this.password.value).subscribe(
        data => (console.log(data), window.location.href = './profil', localStorage.setItem
      ('currentUser', JSON.stringify(data))),
        error => console.error(error.status)
      );
    } else {
      console.error('Form errors');
    }
  }

  constructor(private dao: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.route.snapshot.data;
  }

}
