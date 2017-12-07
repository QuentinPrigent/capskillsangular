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

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  constructor() { }

  ngOnInit() {
  }

}
