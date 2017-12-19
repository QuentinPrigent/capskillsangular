
import { Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource, MatSort} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA, MatToolbarModule} from '@angular/material';
import {OnClickEvent, OnRatingChangeEven, OnHoverRatingChangeEvent} from 'angular-star-rating';
import { TableauCompetenceService } from '../../tableau-competence.service';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
  selector: 'skills-tableau-competence',
  templateUrl: './tableau-competence.component.html',
  styleUrls: ['./tableau-competence.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableauCompetenceComponent implements OnInit {
  //déclarration de variables
  //displayedColumns pour les colonne du tableau
displayedColumns = ['skillType', 'skill', 'actualGrade', 'targetGrade', 'collaboratorGrade', 'modify'];
// datasource contient les infos du tableau
dataSource = new MatTableDataSource(ELEMENT_DATA);
grading:Element;
gradings:any;
search:any;
userId=15

@ViewChild(MatSort) sort: MatSort;
action:string;

  constructor(public service: TableauCompetenceService,public dialog: MatDialog) { 
    
     }

 ngOnInit() {
    //appel du service de récupérations des infos de la table grading. les informations retournées.
    // sont affecter à la variable gradings (this.gradings)
    //this.service.getGradings();
    //.then( (data) => { this.gradings = data;   console.log(data)} );
    this.getUserGradings(this.userId);
  }

  applyFilter(filterValue: string) {
   
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.search=filterValue;
    this.dataSource.filter = filterValue;
  }


  async getUserGradings(userId:number){
    //on recupère les grading de la base de données de manière asynchrone 
    //(on attend le retour de la reponse) avant d'éffectuer tout autre action ) 
    let response= await this.service.getUserGradings(userId);
    //on parcour les infos récupérées de la table grading puis on extrait que les infos necessaires 
    //pour les colonnes du tableau. A la fin,du parcour ELEMENT_DATA, contient les lignes du tableau
    //ce qui actualise le tableau  
    console.log(response);
    let i=0;
    for (let entry of response) {
      ELEMENT_DATA[i]={ gradingId:entry.id,skillTypeId: entry.skill.skillType.id, skillTypeName: entry.skill.skillType.skillTypeName, skillId: entry.skill.id,skillName: entry.skill.name,
        actualGrade: entry.actualgrade, targetGrade: entry.targetgrade, collaboratorGrade: entry.collaboratorgrade,userId:this.userId };
       i=i+1;
     }
     this.dataSource=new MatTableDataSource(ELEMENT_DATA) ;
     
  }

  async postGrading(grading:any){
    //on recupère les grading de la base de données de manière asynchrone 
    //(on attend le retour de la reponse) avant d'éffectuer tout autre action ) 
    let response= await this.service.postGrading(grading);
    
   console.log(response);
    /*  ELEMENT_DATA[ELEMENT_DATA.length]={ gradingId:response.gradingId,skillTypeId: response.skillId, skillTypeName: response.skillTypeName, skillId: entry.skill.id,skillName: entry.skill.name,
        actualGrade: entry.actualgrade, targetGrade: entry.targetgrade, collaboratorGrade: entry.collaboratorgrade,userId:this.userId };
     */
     this.dataSource=new MatTableDataSource(ELEMENT_DATA) ;
  }
  /**
  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  sngAfterViewInit() {

    //console.log(this.gradings);
      this.dataSource.sort = this.sort;
  }
//utiliser pour modifier les grading lors de l'appui sur les crayons
 openTableauCompetenceUpdate(elt: Element, row: number): void {
    console.log('ligne :'+row);
   const dialogRef = this.dialog.open(TableauCompetenceUpdateComponent , {height: '250px', width: '350px', data: 
    {gradingId:elt.gradingId,skillTypeId:elt.skillTypeId, skillTypeName: elt.skillTypeName, skillId:elt.skillId,skillName: elt.skillName,
      actualGrade: elt.actualGrade, targetGrade: elt.targetGrade, collaboratorGrade: elt.collaboratorGrade,userId:elt.userId 
      ,title:"Modifier",action:'update' }});
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log('The dialog was closed', result);
        elt.actualGrade=result.actualGrade;
        this.grading=elt;
        this.service.updadteGrading(this.grading).subscribe();
        
      }
    });
  }

  //lorque l'on clique sur le bouton add grading
  openTableauCompetenceAdd(): void {
 //on affiche le formulaire popup d'enregistrement de grading
    const dialogRef = this.dialog.open(TableauCompetenceUpdateComponent , {height: '350px', width: '350px', data: 
    { title: "S'ajouter une compétence",action:'add'}});
    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        //au clique sur le bouton ok,  on appel le service POST d'enregistrement de grading et
        //et on ajout dans le tableau le nouvel enregistrement
        this.grading ={gradingId:null,skillTypeId:result.skillType.id, skillTypeName: result.skillType.skillTypeName, skillId:result.skill.id,skillName: result.skill.name,
          actualGrade: result.actualGrade, targetGrade: result.targetGrade, collaboratorGrade: result.collaboratorGrade,userId:this.userId }
        //{id:result.skillType.id, userId:11, skillId:result.skill.id,	actualGrade:result.actualGrade,targetGrade:0,collaboratorGrade:0};     
        this.service.postGrading(this.grading).subscribe( (data) =>{
        let grad:any = data;
        console.log(grad);
        //affectation du id du grading retournée pra la BD dans la struture de données grading
        this.grading.gradingId=grad.id;
        this.grading.collaboratorGrade=grad.collaboratorgrade;
        this.grading.targetGrade=grad.targetgrade;
         ELEMENT_DATA[ELEMENT_DATA.length] = this.grading;
         this.dataSource=new MatTableDataSource(ELEMENT_DATA) ;
         console.log(this.grading);
        } );
        
      }
    });
  }
}

//ce component sert à afficher le popup
@Component({
  selector: 'skills-tableau-competence-update',
  templateUrl: 'tableau-competence-update.html',
  styleUrls: ['./tableau-competence.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TableauCompetenceUpdateComponent {
  //déclaration des variables
  skillTypes: any;
  skills:any;
  selectedSkillType:any;
  selectedSkill:any;

  constructor(public service: TableauCompetenceService,
  public dialogRef: MatDialogRef<TableauCompetenceUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
    }
    ngOnInit() {
     this.service.getSkillTypes().subscribe( (data) => this.skillTypes = data );
    }
    //gerer le clique du bouton cancel situer sur le popup
  onCancel(): void {
    this.dialogRef.close();
  }
  //gere les clicks sur les étoiles de actualGrade
  onClickActualGrade = ($event: OnClickEvent) => {
    console.log('onClickActual $event: ', $event);
    this.data.actualGrade = $event.rating;
}
//gere les clicks sur les étoiles de collaborateGrade
onClickCollaboratorGrade = ($event: OnClickEvent) => {
  console.log('onClickObjectif $event: ', $event);
  this.data.collaboratorGrade = $event.rating;
}
////permte d'affichier les skills selon le skilltype choisi. 
//au changement de la valeur du skill type, il appelle de service de recupération
// de skill .
onSkillTypeChange(val)
{
  this.selectedSkillType=val;
  console.log('select skill type is : '+this.selectedSkillType.skillTypeName+this.selectedSkillType.id);
  this.service.getSkills(this.selectedSkillType.id).subscribe( (data) => this.skills = data );
  this.data.skillType=this.selectedSkillType;
}
//permet de recuperer les infos choisi au niveau du skill i.e le nom et l'id du skill
onSkillChange(val)
{
  this.selectedSkill=val;
  console.log('select skill type is : '+this.selectedSkill.name+this.selectedSkill.id);
  this.data.skill=this.selectedSkill;
}

}



export interface Element {
  gradingId:number;
  skillTypeId: number;
  skillTypeName: string;
  skillId: number;
   skillName: string;
   actualGrade: number;
   targetGrade: number;
   collaboratorGrade: number;
   userId:number;
  }

 
let ELEMENT_DATA: Element[] = [ ];

