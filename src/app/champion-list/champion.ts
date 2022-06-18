export interface Champion {
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  image: any;
  info: any;
  partype: string;
  stats: any;
  version: string;
  tags: any;
}
  
export interface ChampionsIdsInformation {    
  freeChampionIdsForNewPlayers: any;
  freeChampionIds: any;
  maxNewPlayerLevel: number;
}

export interface ChampionsInformation {    
  type: string;
  format: string;
  version: string;
  data: any;
}