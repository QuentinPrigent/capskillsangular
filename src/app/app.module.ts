import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LoginModule,
    ProfilModule,
    HttpModule,
    HttpClientModule,
    TableauCompetenceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
