import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, TurnRedLengthDirective } from './app.component';
import { TodoListModule } from './todo-list';

@NgModule({

  declarations: [
    AppComponent,
    TurnRedLengthDirective,
  ],

  providers: [ 
  ],

  bootstrap: [
    AppComponent
  ],



  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoListModule,
  ],

})
export class AppModule { }
