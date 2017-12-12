import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA, MatToolbarModule} from '@angular/material';
import {OnClickEvent, OnRatingChangeEven, OnHoverRatingChangeEvent} from 'angular-star-rating';

@Component({
  selector: 'skills-competence',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent implements OnInit {
displayedColumns = ['skillType', 'skill', 'modify'];
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

  openSkillsDialog(elt: Element, row: number): void {
    const dialogRef = this.dialog.open(SkillsDiaologComponent , {height: '300px', width: '250px', data: 
    { skillType: elt.skillType, skill: elt.skill }});
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log('The dialog was closed', result.actualLevel);
      ELEMENT_DATA[row] = { skillType: result.skillType, skill: result.skill };
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      }
    });
  }
}


@Component({
  selector: 'skills-dialog',
  templateUrl: 'skills-dialog.html',
  styleUrls: ['./skills.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsDiaologComponent {

  constructor(
    public dialogRef: MatDialogRef<SkillsDiaologComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  onCancel(): void {
    this.dialogRef.close();
  }


}
export interface Element {
  skillType: string;
   skill: string;
/*validation:boolean;*/
  }

const ELEMENT_DATA: Element[] = [
    {skillType: 'Langage', skill: 'J2EE'},
    {skillType: 'Software', skill: 'Angular'},
    {skillType: 'Software', skill: 'PHP'},
    {skillType: 'hardware', skill: 'Network'},
    {skillType: 'Management', skill: 'Agile methode'},
    {skillType: 'Management', skill: 'Project management'}

  ];
