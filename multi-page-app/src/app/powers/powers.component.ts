import { Component } from '@angular/core';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.css']
})
export class PowersComponent {
  powers = [
    { name: 'Heatblast', description: 'Fire manipulation and attack.' },
    { name: 'Four Arms', description: 'Super strength and endurance.' },
    { name: 'XLR8', description: 'Super speed and agility.' },
    { name: 'Grey Matter', description: 'Genius-level intelligence.' },
    { name: 'Upgrade', description: 'Technological assimilation.' }
  ];
}
