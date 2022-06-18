import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpErrorResponse} from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ChampionsIdsInformation, ChampionsInformation } from '../champion-list/champion';

@Injectable({
  providedIn: 'root'
})
export class ChampionDataService {  
  api_key:string = environment.apiKey;
  constructor(private http:HttpClient) {  }

  public getChampionList(): Observable<ChampionsIdsInformation> {
    const url = "https://eun1.api.riotgames.com/lol/platform/v3/champion-rotations";
    let params = new HttpParams()
                    .set('api_key', this.api_key);
   
    return this.http.get<ChampionsIdsInformation>(url, {params})
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  public getChampion(): Observable<ChampionsInformation> {
    const url = "http://ddragon.leagueoflegends.com/cdn/12.11.1/data/fr_FR/champion.json";
    return this.http.get<ChampionsInformation>(url).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  private handleError(error: HttpErrorResponse) {
    // A client-side or network error occurred. Handle it accordingly.
    if (error.status === 0) {      
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
