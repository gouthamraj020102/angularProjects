import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() childMessage!: string;  // Receives value from parent
  @Input() data: any;
  @Input() array: any;

  @Output() customEvent = new EventEmitter;
  message = "passed to parent";

  childData = "this is demo component communication";
  title = "Child to Parent communication";

  demo() {
    return "Hello world!";
  }

  passToParent() {
    this.customEvent.emit(this.message);
  }

  updateCustomEventMessage(data: any) {
    this.message = data.target.value;
  }
}
