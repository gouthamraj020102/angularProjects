import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { EmptyMessageFormatterPipe } from './shared/pipes/empty-message-formatter.pipe';
import { PageTitleFormatterPipe } from './shared/pipes/page-title-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EmptyMessageFormatterPipe,
    PageTitleFormatterPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
