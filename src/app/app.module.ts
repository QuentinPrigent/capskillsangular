import { NgModule } from '@angular/core';
<<<<<<< HEAD
/*import of modules*/
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { ProfilModule } from './profil/profil.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TabconscompModule } from './tabconscomp/tabconscomp.module';



=======
/*import of moduels*/
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { ProfilModule } from './profil/profil.module';
import { TableauCompetenceModule } from './tableau-competence/tableau-competence.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> cecile

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
<<<<<<< HEAD
    TabconscompModule,
=======
>>>>>>> cecile
    AppRoutingModule,
    BrowserModule,
    LoginModule,
    ProfilModule,
    HttpModule,
    HttpClientModule,
<<<<<<< HEAD

=======
    TableauCompetenceModule,
>>>>>>> cecile
  ],
  providers: [],
  bootstrap: [AppComponent
})
export class AppModule { }
