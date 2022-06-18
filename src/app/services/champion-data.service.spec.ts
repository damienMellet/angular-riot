import { TestBed } from '@angular/core/testing';

import { ChampionDataService } from './champion-data.service';

describe('ChampionDataService', () => {
  let service: ChampionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
