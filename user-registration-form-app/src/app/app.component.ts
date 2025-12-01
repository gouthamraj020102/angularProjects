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
  email: string | undefined;
  gen: string | undefined;
  country: string | undefined;

  defaultGender = 'Male';
  gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'Other'}
  ];

  @ViewChild('myForm') form: NgForm | undefined;

  onSubmit() {
    console.log(this.form);
    this.firstname = this.form?.value.personDetails.firstname;
    this.lastname = this.form?.value.personDetails.lastname;
    this.email = this.form?.value.personDetails.email;
    this.gen = this.form?.value.gender;
    this.country = this.form?.value.country;

    this.form?.reset();
  }

  setDefaultValues() {
    // this.form.value.personDetails.firstname = 'Gowtham';
    // this.form.value.personDetails.lastname = 'Raj';
    // this.form.value.personDetails.email = 'gowtham.raj@gmail.com';

    // this.form?.setValue({
    //   country: '',
    //   gender: '',
    //   hobbies: '',
    //   personDetails: {
    //     firstname: 'Gowtham',
    //     lastname: 'Raj',
    //     email: 'gowtham.raj@gmail.com'
    //   }
    // });

    this.form?.form.patchValue({
      personDetails: {
        firstname: 'Gowtham',
        lastname: 'Raj',
        email: 'gowtham.raj@gmail.com'
      }
    });
  }
}
