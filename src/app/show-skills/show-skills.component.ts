import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-show-skills',
  templateUrl: './show-skills.component.html',
  styleUrls: ['./show-skills.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ShowSkillsComponent implements OnInit {
displayedColumns = ['category', 'skill', 'actualLevel', 'gradeTarget', 'gradeObjectif', 'modify'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
@ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {

  }

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
     this.dataSource.sort = this.sort;
  }
}


export interface Element {
 category: string;
 skill: string;
 actualLevel: number;
 gradeTarget: number;
 gradeObjectif:number;
 modify:string;


};

const ELEMENT_DATA: Element[] = [
  {category: 'Software', skill: 'J2EE',  actualLevel: 2, gradeTarget: 3,gradeObjectif:4, modify :''},
  {category: 'Software', skill: 'Angular',  actualLevel: 2, gradeTarget: 3,gradeObjectif:4, modify :''},
  {category: 'Software', skill: 'PHP',  actualLevel: 0, gradeTarget: 2, gradeObjectif:3, modify :''},
  {category: 'hardware', skill: 'Network',  actualLevel: 0, gradeTarget: 2,gradeObjectif:2, modify :''},
  {category: 'Management', skill: 'Agile methode',  actualLevel: 1, gradeTarget: 3,gradeObjectif:4, modify :''},
  {category: 'Management', skill: 'Project management',  actualLevel: 1, gradeTarget: 1,gradeObjectif:3, modify :''}
  
];