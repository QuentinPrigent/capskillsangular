import { UsersService } from './Services/users.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './containers/profil/profil.component';
import { BilanComponent } from './containers/bilan/bilan.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgxChartsModule
  ],
  providers : [UsersService],
  declarations: [ProfilComponent, BilanComponent],
  exports: [ProfilComponent, BilanComponent]
})
export class ProfilModule { }
