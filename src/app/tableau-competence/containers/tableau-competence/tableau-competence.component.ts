
import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA, MatToolbarModule} from '@angular/material';
import {OnClickEvent, OnRatingChangeEven, OnHoverRatingChangeEvent} from 'angular-star-rating';

@Component({
  selector: 'skills-tableau-competence',
  templateUrl: './tableau-competence.component.html',
  styleUrls: ['./tableau-competence.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableauCompetenceComponent implements OnInit {
displayedColumns = ['skillType', 'skill', 'actualGrade', 'targetGrade', 'collaboratorGrade', 'modify'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
@ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  sngAfterViewInit() {
     this.dataSource.sort = this.sort;
  }

  openTableauCompetenceUpdate(elt: Element, row: number): void {
    const dialogRef = this.dialog.open(TableauCompetenceUpdateComponent , {height: '350px', width: '350px', data: 
    { skillType: elt.skillType, skill: elt.skill,  actualGrade: elt.actualGrade, targetGrade: elt.targetGrade, 
      collaboratorGrade: elt.collaboratorGrade }});
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log('The dialog was closed', result.actualLevel);
      ELEMENT_DATA[row] = { skillType: result.skillType, skill: result.skill,
        actualGrade: result.actualGrade, targetGrade: result.targetGrade, collaboratorGrade: result.collaboratorGrade };
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      }
    });
  }
}


@Component({
  selector: 'skills-tableau-competence-update',
  templateUrl: 'tableau-competence-update.html',
  styleUrls: ['./tableau-competence.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableauCompetenceUpdateComponent {

  constructor(
    public dialogRef: MatDialogRef<TableauCompetenceUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  onCancel(): void {
    this.dialogRef.close();
  }
  onClickActualGrade = ($event: OnClickEvent) => {
    console.log('onClickActual $event: ', $event);
    this.data.actualGrade = $event.rating;
}
onClickCollaboratorGrade = ($event: OnClickEvent) => {
  console.log('onClickObjectif $event: ', $event);
  this.data.collaboratorGrade = $event.rating;
}

}
export interface Element {
  skillType: string;
   skill: string;
   actualGrade: number;
   targetGrade: number;
   collaboratorGrade: number;
  }

const ELEMENT_DATA: Element[] = [
    {skillType: 'Langage', skill: 'J2EE',  actualGrade: 2, targetGrade: 3, collaboratorGrade: 4},
    {skillType: 'Software', skill: 'Angular',  actualGrade: 2, targetGrade: 3, collaboratorGrade: 4},
    {skillType: 'Software', skill: 'PHP',  actualGrade: 1, targetGrade: 2, collaboratorGrade: 3},
    {skillType: 'hardware', skill: 'Network',  actualGrade: 1, targetGrade: 2, collaboratorGrade: 2},
    {skillType: 'Management', skill: 'Agile methode',  actualGrade: 1, targetGrade: 3, collaboratorGrade: 4},
    {skillType: 'Management', skill: 'Project management',  actualGrade: 1, targetGrade: 1, collaboratorGrade: 3}

  ];

