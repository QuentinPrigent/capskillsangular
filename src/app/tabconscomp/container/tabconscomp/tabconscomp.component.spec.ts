import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabconscompComponent } from './tabconscomp.component';

describe('TabconscompComponent', () => {
  let component: TabconscompComponent;
  let fixture: ComponentFixture<TabconscompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabconscompComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabconscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
