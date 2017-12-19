import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
@Injectable()
export class TableauCompetenceService {


  constructor(public http: HttpClient) { }
  URL: 'http://localhost:1214';
  getSkillTypes() {
    return this.http.get('http://localhost:1214/skill-types/' );
  }


  async getGradings(): Promise<any> {
    let response = await this.http.get('http://localhost:1214/grading/').toPromise();
    return response;
  }

  async getUserGradings(userId:number): Promise<any> {
    let response = await this.http.get('http://localhost:1214/grading/users/'+userId).toPromise();
    return response;
  }
  getSkills(skillTypeId:string){
    return this.http.get('http://localhost:1214/skills/display/'+skillTypeId);
  }

  postGrading(grading: any) {
     let response = this.http.post('http://localhost:1214/grading/addGrading/?' + 'actualgrade=' + grading.actualGrade 
     + '&userId=' + grading.userId + '+&skillId=' + grading.skillId, '');
     console.log(response);
     return response;
  }

  updadteGrading(grading: any) {
    let response = this.http.put('http://localhost:1214/grading/' + grading.gradingId + '?actualgrade=' + grading.actualGrade 
    + '&userId=' + grading.userId + '+&skillId=' + grading.skillId + '+&collaboratorgrade=' + grading.collaboratorGrade + '+&targetgrade=' 
    + grading.targetGrade, '' );
    console.log(response);
    return response;
 }
}

/*export interface Grad{
  
    id: number;
    user: {
      id: number;
      firstname: string;
      lastname: string,
      email: string;
      password: string;
      referent: string;
      skills: any;
    };
    skill: {
      id: 9;
      name: string;
      skillType: {
        id: 1;
        skillTypeName: string
      }
    };
    collaboratorgrade:number;
    targetgrade: number;
    actualgrade: number
  }*/