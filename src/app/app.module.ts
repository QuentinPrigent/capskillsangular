import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { ProfilModule } from './profil/profil.module';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    LoginModule,
    ProfilModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
