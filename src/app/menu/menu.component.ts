import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Input } from '@angular/core';
import { ConnexionService } from '../connexion.service';
import { Login} from '../login/login';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class MenuComponent implements OnInit {
@Input() login: Login;
  constructor(private connexionService: ConnexionService
  ) {}

getLogin(): void {
  this.login = this.connexionService.getLogin();
  
}
   ngOnInit(): void {
  this.getLogin();
}

}
