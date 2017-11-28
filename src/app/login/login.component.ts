import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule,FormControl,Validators, ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
 email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
   hide = true;
  constructor() { }

  ngOnInit() {
  }

}
