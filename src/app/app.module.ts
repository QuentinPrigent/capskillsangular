import { TableaurecherchecollModule } from './tableaurecherchecoll/tableaurecherchecoll.module';
import { AccueilreferentModule } from './accueilreferent/accueilreferent.module';
import { UsersService } from './users.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

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

/*import of modules*/
import { TableauCompetenceModule } from './tableau-competence/tableau-competence.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TabconscompModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    ProfilModule,
    HttpModule,
    HttpClientModule,
    AccueilreferentModule,
    TableaurecherchecollModule,
    TableauCompetenceModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
