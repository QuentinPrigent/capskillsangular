import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './containers/profil/profil.component';
import { BilanComponent } from './containers/bilan/bilan.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgxChartsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers : [],
  declarations: [ProfilComponent, BilanComponent],
  exports: [ProfilComponent, BilanComponent]
})
export class ProfilModule { }
