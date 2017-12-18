<<<<<<< HEAD
import { TabconscompComponent } from './tabconscomp/container/tabconscomp/tabconscomp.component';
=======
>>>>>>> cecile
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/containers/profil/profil.component';
import { LoginComponent } from './login/containers/login/login.component';
<<<<<<< HEAD
import { BilanComponent } from './profil/containers/bilan/bilan.component';

=======
import { TableauCompetenceComponent } from './tableau-competence/containers/tableau-competence/tableau-competence.component';
>>>>>>> cecile

const routes: Routes = [
  {path : '', redirectTo: 'login', pathMatch: 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'profile', component : ProfilComponent},
<<<<<<< HEAD
  {path : 'tabconscomp', component : TabconscompComponent},
  {path : 'bilan', component : BilanComponent }
=======
  {path : 'TableauCompetenceComponent', component : TableauCompetenceComponent},
>>>>>>> cecile

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
