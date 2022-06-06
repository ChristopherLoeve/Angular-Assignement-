import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Character } from './character'

interface ICharacterData {members: {id: string, name:string, level:string}}


@Injectable({
  providedIn: 'root'
})

export class ApiServiceService {

  constructor(private httpClient: HttpClient) { }

  public getGuildMembers(): Observable<object> {
    return this.httpClient.get<object>(
      'https://eu.api.blizzard.com/data/wow/guild/tarren-mill/scripes-fan-club/roster?namespace=profile-eu&locale=en_GB&access_token=USHROha5xdLQS5xtusUI6qmjDSeN58vv5W'
    )      
  }

   public getGuildMembersPipe(): Observable<Character[]> {
    return this.httpClient.get<ICharacterData>('https://eu.api.blizzard.com/data/wow/guild/tarren-mill/scripes-fan-club/roster?namespace=profile-eu&locale=en_GB&access_token=USHROha5xdLQS5xtusUI6qmjDSeN58vv5W/members.json')
    .pipe(map(members => {
      return members.map(member => {
        return { 
          id: member.id,
          name: member.name,
          level: member.level,
        } as Character
      })
    }))
  } 

}
