import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, TodoInputComponent } from './app.component';

@NgModule({

  declarations: [
    AppComponent,
    TodoInputComponent,
  ],

  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ ],
})
export class AppModule { }
