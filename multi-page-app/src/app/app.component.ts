import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Multi Page App - Parent';
  parentMessage = 'Header Component - Child!';

  data1 = "This is demo of input decorator - Array1";
  array1 = [10, 20, 30, 40, 50];

  data2 = "This is demo of inpur decorator - Array2";
  array2 = [100, 200, 300, 400, 500];

  data!: string;

  updateData(e: string) {
    this.data = e;
  }
}
