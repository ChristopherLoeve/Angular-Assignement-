import { Component, OnInit } from '@angular/core';

import { Character } from '../character'
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
  providers: [ApiServiceService]
})

export class CharacterListComponent implements OnInit {
  public characters: object | undefined

  constructor(service: ApiServiceService) { 
    service.getGuildMembers().subscribe(response => console.log(this.characters = response));
  }

  ngOnInit(): void {
  }

}
