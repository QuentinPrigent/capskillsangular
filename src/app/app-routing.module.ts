import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }  from './login/login.component';
import { ShowSkillsComponent }  from './show-skills/show-skills.component';
const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: 'skills/show', component: ShowSkillsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],

  exports: [ RouterModule ],
  declarations: [],
  
})
export class AppRoutingModule { }


