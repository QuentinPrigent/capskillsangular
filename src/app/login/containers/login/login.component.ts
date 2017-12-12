import { UsersService } from './../../../users.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core/src/metadata/view';

@Component({
  selector: 'skills-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  login(event) {
    if (this.email.valid && this.password.valid) {
      // Run.
      this.dao.login(this.email.value, this.password.value).subscribe(
        data => console.log(data),
        error => console.error(error.status)
      );
    } else {
      console.error('Form errors');
    }
  }

  constructor(private dao: UsersService) { }

  ngOnInit() {
}
}
