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
  @Input() arrayWithName: any;
  @Input() dateOfBirth: any;
  @Input() annualSalary: any;
  @Input() number: any;
  @Input() person: any;
  @Input() company: any;

  employees= [
    { employeeName: 'Gowtham', gender: 'Male'},
    { employeeName: 'Deepak', gender: 'Male'},
    { employeeName: 'Preethi', gender: 'Female'},
    { employeeName: 'Suneela', gender: 'Female'}
  ];

  @Output() customEvent = new EventEmitter;
  message = "passed to parent";

  childData = "this is demo component communication";
  title = "Child to Parent";

  passTitleToParent() {
    return this.title;
  }

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
