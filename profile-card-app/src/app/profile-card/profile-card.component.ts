import { Component } from '@angular/core';
import { TeamMember } from '../../shared/models/TeamMember';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
title = 'Together we build';
subTitle = 'The people who make it happen';
teamMembers : any[] = [
    new TeamMember('Govinda Raju', 'Technical Manager', 'assets/Govind.png'),
    new TeamMember('Gowtham Raju', 'Backend Developer', 'assets/Gowtham.jpg'),
    new TeamMember('Deepak', 'Backend Developer', 'assets/Deepak.png'),
    new TeamMember('Shiva Rama', 'Backend Developer', 'assets/Shiva.png'),
    new TeamMember('Pavani Kella', 'Backend Developer', 'assets/Preethi.jpg'),
    new TeamMember('Vijay Kumar', 'Full Stack', 'assets/Vijay.png'),
    new TeamMember('Suneela', 'Backend Developer', 'assets/Suneela.png'),
    new TeamMember('Vathsalya', 'Backend Developer', 'assets/Vathsalya.png'),
    new TeamMember('Prakash', 'Mobile Developer', 'assets/Prakash.png'),
    new TeamMember('Sudheer', 'Backend Developer', 'assets/Sudheer.png')
  ];
  page = 0;

  get visibleMembers() {
    const start = this.page * 5;
    return this.teamMembers.slice(start, start + 5);
  }

  nextGroup() {
    if ((this.page + 1) * 5 < this.teamMembers.length) {
      this.page++;
    }
  }

  prevGroup() {
    if (this.page > 0) {
      this.page--;
    }
  }
}