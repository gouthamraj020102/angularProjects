import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { EmployeeTitlePipe } from './pipes/employeeTitle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeTitlePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
