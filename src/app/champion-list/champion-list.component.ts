import { Component, OnInit } from '@angular/core';

import { ChampionDataService } from '../services/champion-data.service';
import { ChampionsInformation, ChampionsIdsInformation, Champion } from './champion';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.scss']
})
export class ChampionListComponent implements OnInit {
  champions:any;
  constructor(private championService: ChampionDataService) { }

  ngOnInit(): void {
    //call api to get Free Champions ids
    this.championService.getChampionList().subscribe((response: ChampionsIdsInformation)=>{        
        let championIdList = response.freeChampionIds;
        let dragonList: any;

        // call api to get champions Information
        this.championService.getChampion().subscribe((data: ChampionsInformation)=>{          
          dragonList = data.data;

          //transform dragonList to array
          const dragonListArray = Object.values(dragonList);
          this.champions = dragonListArray.filter((champion: any)=>{
            return championIdList.some((id:number)=>{
              return Number(champion.key) == id;
            })            
          })
        });
    });
  }

}
