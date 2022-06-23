import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { ChampionDataService } from './champion-data.service';

describe('ChampionDataService', () => {
  let service: ChampionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ChampionDataService]
    });
    service = TestBed.inject(ChampionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
