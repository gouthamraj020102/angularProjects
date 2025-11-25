import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  getCharacters() {
    return [
      { name: 'Ben Tennyson', description: 'Main hero with the Omnitrix.', imageUrl: 'https://picfiles.alphacoders.com/379/379069.jpg'},
      { name: 'Gwen Tennyson', description: 'Ben’s cousin with magic and tech powers.', imageUrl: 'https://media.tenor.com/RvfwFW8yr-EAAAAC/ben10alien-force-gwen-ben10.gif'},
      { name: 'Kevin Levin', description: 'Ally with absorption powers.', imageUrl: 'https://i.pinimg.com/736x/39/e3/09/39e3097804c340336330d059f9931125.jpg'},
      { name: 'Grandpa Max', description: 'Family mentor and guide.', imageUrl: 'https://i.redd.it/j1eflx29ccab1.png'},
      { name: 'Vilgax', description: 'Main villain threatening the universe.', imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/125fa4a2-f9db-488e-877c-71cac6eab174/dgxyzjl-bc81f18c-0741-4b39-a25a-679d8c1b6421.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzEyNWZhNGEyLWY5ZGItNDg4ZS04NzdjLTcxY2FjNmVhYjE3NFwvZGd4eXpqbC1iYzgxZjE4Yy0wNzQxLTRiMzktYTI1YS02NzlkOGMxYjY0MjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.o8uth4cLFzKqDM53x7NDgMUwgaeZhflNvx9-9BoGGDw'}
    ];
  }
}
