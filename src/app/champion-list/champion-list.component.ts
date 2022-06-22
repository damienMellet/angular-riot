import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ChampionDataService } from '../services/champion-data.service';
import { ChampionsInformation, ChampionsIdsInformation, Champion } from './champion';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.scss']
})
export class ChampionListComponent implements OnInit {
  champions:any;
  championSubscription: Subscription = new Subscription;
  championServiceSubscription: Subscription = new Subscription;
  dragonListArray: Champion[] = [];
  constructor(private championService: ChampionDataService) { }

  ngOnInit(): void {
    //call api to get Free Champions ids
    this.championSubscription = this.championService.getChampionList().subscribe((response: ChampionsIdsInformation)=>{        
        let championIdList = response.freeChampionIds;
        // call api to get champion's Information
        this.championServiceSubscription = this.championService.getChampion().subscribe((data: ChampionsInformation)=>{
          //transform data to array
          this.dragonListArray = Object.values(data.data);
          this.champions = this.dragonListArray.filter((champion: Champion)=>{
            // return champions by ids
            return championIdList.some((id:Number)=>{
              return Number(champion.key) == id;
            })            
          })
        });
    });
  }

  ngOnDestroy():void {
    this.championSubscription.unsubscribe();
    this.championServiceSubscription.unsubscribe();
  }

}
