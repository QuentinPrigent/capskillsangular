import { UsersResolver } from './users.resolver';
import { TabconscompComponent } from './tabconscomp/container/tabconscomp/tabconscomp.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/containers/profil/profil.component';
import { LoginComponent } from './login/containers/login/login.component';
import { BilanComponent } from './profil/containers/bilan/bilan.component';


const routes: Routes = [
  {path : '', redirectTo: 'login', pathMatch: 'full'},
  {
    path : 'login',
    component : LoginComponent,
    resolve: { message: UsersResolver }
  },
  {
    path : 'profil',
    component : ProfilComponent,
    resolve : { message: UsersResolver}
  },
  {path : 'tabconscomp', component : TabconscompComponent},
  {path : 'bilan', component : BilanComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    UsersResolver
  ]
})
export class AppRoutingModule { }
