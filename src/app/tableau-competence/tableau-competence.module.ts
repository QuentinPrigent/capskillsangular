import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule, MatTableModule, MatCardModule, MatIconModule, MatInputModule,
  MatDialogModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import {MatTableDataSource, MatSort} from '@angular/material';
import { TableauCompetenceComponent, TableauCompetenceUpdateComponent } from './containers/tableau-competence/tableau-competence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { StarRatingModule } from 'angular-star-rating';
import {OnClickEvent, OnRatingChangeEven, OnHoverRatingChangeEvent} from 'angular-star-rating';
import {HttpModule} from '@angular/http';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDialogModule,
    StarRatingModule.forRoot(),
    MatToolbarModule,
  ],
  exports: [ TableauCompetenceComponent ],
  declarations: [TableauCompetenceComponent, TableauCompetenceUpdateComponent],
  entryComponents: [TableauCompetenceUpdateComponent]
})
export class TableauCompetenceModule { }
