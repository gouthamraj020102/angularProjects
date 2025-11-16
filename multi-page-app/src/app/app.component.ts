import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

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

  name = ['Gowtham', 'Raju', 'Manapuram'];
  dob = '06/02/2002';
  salary = 6000.44999;
  num = 0.98;
  companyName = 'Software Tech Solutions Ltd';

  person1 = {
    'name': "gowtham",
    'age': "23",
    "salary": 6000.44999
  }

  updateData(e: string) {
    this.data = e;
  }

  @ViewChild(HeaderComponent) header: any;

  cData="";

  test() {
    this.cData = this.header.passTitleToParent();
  }
}
