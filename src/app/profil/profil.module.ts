<<<<<<< HEAD
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
=======
>>>>>>> cecile
import { UsersService } from './Services/users.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './containers/profil/profil.component';
import { BilanComponent } from './containers/bilan/bilan.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatToolbarModule } from '@angular/material';
=======
import {NgxChartsModule} from '@swimlane/ngx-charts';
>>>>>>> cecile

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
<<<<<<< HEAD
    NgxChartsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
=======
    NgxChartsModule
>>>>>>> cecile
  ],
  providers : [UsersService],
  declarations: [ProfilComponent, BilanComponent],
  exports: [ProfilComponent, BilanComponent]
})
export class ProfilModule { }
