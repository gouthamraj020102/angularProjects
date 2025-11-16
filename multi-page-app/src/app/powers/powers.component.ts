import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Power } from './model/Power';

@Component({
  selector: 'app-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.css']
})
export class PowersComponent implements OnInit {
  powers: Power[] = [];
  characterName: string | null = null;

  allPowers: { [key: string]: Power[] } = {
    'Ben Tennyson': [
      { name: 'Heatblast', imageUrl: 'https://wallpapercave.com/wp/wp3759226.jpg' },
      { name: 'Four Arms', imageUrl: 'https://wallpaperaccess.com/full/6502539.png' },
      { name: 'Grey Matter', imageUrl: 'https://wallpapercave.com/wp/wp10149402.png' },
      { name: 'Wildmutt', imageUrl: 'https://wallpapercave.com/wp/wp10051242.jpg' },
      { name: 'Ghostfreak', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d0b70ab5-cb06-491a-a59c-079daa858ad2/dbxovvt-04db0cd9-edee-45a1-a1ce-58eecbc07d62.png/v1/fill/w_1600,h_1132,q_80,strp/ghostfreak___ben10_redesign_by_s_quarryspirit_dbxovvt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEzMiIsInBhdGgiOiJcL2ZcL2QwYjcwYWI1LWNiMDYtNDkxYS1hNTljLTA3OWRhYTg1OGFkMlwvZGJ4b3Z2dC0wNGRiMGNkOS1lZGVlLTQ1YTEtYTFjZS01OGVlY2JjMDdkNjIucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.G3CMfNkBRCaGGhixhrDmotmiCk466tc7viv89NFwEXs' },
      // { name: 'Diamondhead', description: 'Crystal body with sharp projectiles.', imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/153/791/desktop-wallpaper-diamondhead-from-ben-10-r-hop-ben-10-diamondhead.jpg' },
      // { name: 'Stinkfly', description: 'Flight and slime projection.', imageUrl: 'https://wallpapercave.com/wp/wp10716882.jpg' },
      // { name: 'XLR8', description: 'Super speed and agility.', imageUrl: 'https://wallpapercave.com/wp/wp6635441.jpg' },
      { name: 'Alien X', imageUrl: 'https://wallpaperaccess.com/full/9382082.jpg' }
    ],
    'Gwen Tennyson': [
      { name: 'Magic Shield', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eea7a90c-f2d5-45a2-a279-5f43bddb15ee/d8oembu-acfdf527-846c-4d58-915c-4f6453995206.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VlYTdhOTBjLWYyZDUtNDVhMi1hMjc5LTVmNDNiZGRiMTVlZVwvZDhvZW1idS1hY2ZkZjUyNy04NDZjLTRkNTgtOTE1Yy00ZjY0NTM5OTUyMDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JvO1OGocDOm3uwG08MS-b8u8uF_Xe5cGVE6K3z_f64A' },
      { name: 'Spell Casting', imageUrl: 'https://wallpapercave.com/wp/wp8830235.jpg' }
    ],
    'Kevin Levin': [
      { name: 'Material Absorption', imageUrl: 'http://vignette4.wikia.nocookie.net/villains/images/4/45/Kevin_Levin_%24.jpg/revision/latest?cb=20160430233320' }
    ],
    'Vilgax': [
      { name: 'Super Strength', imageUrl: 'https://e1.pxfuel.com/desktop-wallpaper/29/23/desktop-wallpaper-reboot-vilgax-by-insane-ben-10-mutations.jpg' }
    ]
  };

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.characterName = this.route.snapshot.paramMap.get('name');
    this.powers = this.characterName && this.allPowers[this.characterName] ? this.allPowers[this.characterName] : [];
  }
}
