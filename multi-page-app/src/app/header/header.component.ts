import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() childMessage!: string;  // Receives value from parent
  @Input() data: any;
  @Input() array: any;
}
