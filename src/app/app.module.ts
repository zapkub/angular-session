import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodoListModule } from './todo-list';

@NgModule({

  declarations: [
    AppComponent,
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
