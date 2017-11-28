import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './/app-routing.module';
import {HttpModule} from "@angular/http";
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { LoginComponent } from './login/login.component';
import { ShowSkillsComponent }  from './show-skills/show-skills.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; // <-- NgModel lives here
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatIconModule,MatButtonModule,MatCardModule, MatTableModule,MatCheckboxModule } from '@angular/material';
//star rating library




@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    LoginComponent,
    ShowSkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
