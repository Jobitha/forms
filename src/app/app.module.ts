import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeofFormsModule } from './typeof-forms/typeof-forms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TypeofFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
