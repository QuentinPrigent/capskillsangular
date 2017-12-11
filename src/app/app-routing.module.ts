import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/containers/profil/profil.component';
import { LoginComponent } from './login/containers/login/login.component';
import { TableauCompetenceComponent } from './tableau-competence/containers/tableau-competence/tableau-competence.component';
import { BilanComponent } from './profil/containers/bilan/bilan.component';

const routes: Routes = [
  {path : '', redirectTo: 'login', pathMatch: 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'profil', component : ProfilComponent},
  {path : 'TableauCompetenceComponent', component : TableauCompetenceComponent},
  {path : 'bilan', component : BilanComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
