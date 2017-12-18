import { TestBed, inject } from '@angular/core/testing';

import { TableauCompetenceService } from './tableau-competence.service';

describe('TableauCompetenceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableauCompetenceService]
    });
  });

  it('should be created', inject([TableauCompetenceService], (service: TableauCompetenceService) => {
    expect(service).toBeTruthy();
  }));
});
