import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  previousLinkText='Back to Home';
  previousLinkRoute='/home';
  nextPageRoute='/powers';
  characters: any;

  constructor(private readonly characterService: CharacterService) {}

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }

}
