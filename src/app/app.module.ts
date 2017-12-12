import { NgModule } from '@angular/core';
/*import of moduels*/
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { ProfilModule } from './profil/profil.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TabconscompModule } from './tabconscomp/tabconscomp.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TabconscompModule,
    AppRoutingModule,
    BrowserModule,
    LoginModule,
    ProfilModule,
    HttpModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
