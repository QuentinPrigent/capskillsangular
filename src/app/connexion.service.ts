import { Injectable } from '@angular/core';
import { Login } from './login/login';
import { LOGIN } from './mockLogin';


@Injectable()
export class ConnexionService {

 


  constructor() { }
getLogin(): Login{
  return LOGIN;
}
}


 

