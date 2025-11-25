import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Power } from './model/Power';
import { PowerService } from '../services/power.service';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.css']
})
export class PowersComponent implements OnInit {
  powers: Power[] = [];
  characterName: string | null = null;
  previousLinkText='Back to Characters';
  previousLinkRoute='/characters';
  nextPageRoute='/powers';

  constructor(private readonly route: ActivatedRoute, private readonly powerService: PowerService) {}

  ngOnInit(): void {
    this.characterName = this.route.snapshot.paramMap.get('name');
    if (this.characterName) {
      this.powers = this.powerService.getPowersByCharacter(this.characterName);
    }
  }

}
