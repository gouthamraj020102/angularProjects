import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-registration-form-app';
  defaultCountry = 'india';
  firstname: string | undefined;
  lastname: string | undefined;

  defaultGender = 'Male';
  gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'Other'}
  ];

  @ViewChild('myForm') form: NgForm | undefined;

  onSubmit() {
    console.log(this.form);
  }

  setDefaultValues() {
    // this.form.value.personDetails.fname = 'Gowtham';
    // this.form.value.personDetails.lname = 'Raj';
    // this.form.value.personDetails.email = 'gowtham.raj@gmail.com';

    // this.form?.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personDetails: {
    //     fname: 'Gowtham',
    //     lname: 'Raj',
    //     email: 'gowtham.raj@gmail.com'
    //   }
    // });

    this.form?.form.patchValue({
      personDetails: {
        fname: 'Gowtham',
        lname: 'Raj',
        email: 'gowtham.raj@gmail.com'
      }
    });
  }
}
