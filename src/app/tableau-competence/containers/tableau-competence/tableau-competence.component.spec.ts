import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauCompetenceComponent } from './tableau-competence.component';

describe('TableauCompetenceComponent', () => {
  let component: TableauCompetenceComponent;
  let fixture: ComponentFixture<TableauCompetenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableauCompetenceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
