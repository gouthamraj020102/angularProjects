import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-shared-component',
  templateUrl: './my-shared-component.component.html',
  styleUrl: './my-shared-component.component.css'
})
export class MySharedComponentComponent {
  @Input() backLinkText!: string;
  @Input() backLinkRoute!: string;
  @Input() targetRoute!: string;
  @Input() items: any;
  @Input() name: any;
}
