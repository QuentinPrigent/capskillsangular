import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableaureferentComponent } from './tableaureferent.component';

describe('TableaureferentComponent', () => {
  let component: TableaureferentComponent;
  let fixture: ComponentFixture<TableaureferentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableaureferentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableaureferentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
