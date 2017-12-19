import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableaurecherchecollComponent } from './tableaurecherchecoll.component';

describe('TableaurecherchecollComponent', () => {
  let component: TableaurecherchecollComponent;
  let fixture: ComponentFixture<TableaurecherchecollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableaurecherchecollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableaurecherchecollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
