import { TableaurecherchecollComponent } from './tableaurecherchecoll/containers/tableaurecherchecoll/tableaurecherchecoll.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/containers/profil/profil.component';
import { LoginComponent } from './login/containers/login/login.component';
import { TableauCompetenceComponent } from './tableau-competence/containers/tableau-competence/tableau-competence.component';
import { BilanComponent } from './profil/containers/bilan/bilan.component';
import { TableaureferentComponent } from './accueilreferent/Containers/tableaureferent/tableaureferent.component';

const routes: Routes = [
  {path : '', redirectTo: 'login', pathMatch: 'full'},
  {path : 'login', component : LoginComponent},
  {path : 'profile', component : ProfilComponent},
  {path : 'TableauCompetenceComponent', component : TableauCompetenceComponent},
  {path : 'bilan', component : BilanComponent },
  {path : 'accueilreferent', component : TableaureferentComponent},
  {path : 'recherchecoll', component : TableaurecherchecollComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
