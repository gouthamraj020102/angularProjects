import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-registration-form-app';
  @ViewChild('myForm') form: NgForm | undefined;

  onSubmit() {
    console.log(this.form);
  }
}
