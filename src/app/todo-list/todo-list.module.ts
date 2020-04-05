import { NgModule, Component } from '@angular/core';
import { TodoListComponent } from './todo-list.component';
import { TodoItemCompletedInputCheckboxComponent } from './todo-item-completed-input-checkbox.component';
import { TodoInputComponent } from './todo-input.component';
import { TodoStoreService } from './todo-store.service';
import { CommonModule } from '@angular/common';

@Component({
    template: `
        <app-todo-input></app-todo-input>
        <app-todo-list></app-todo-list>
    `,
    selector: 'app-todo-standalone'
})
export class TodoStandaloneComponent { }

@NgModule({
    declarations: [
        TodoListComponent,
        TodoInputComponent,
        TodoItemCompletedInputCheckboxComponent,
        TodoStandaloneComponent,
    ],
    providers: [
        TodoStoreService,
    ],

    exports: [
        TodoListComponent,
        TodoInputComponent,
        TodoStandaloneComponent,
    ],

    imports: [
        CommonModule,
    ]
})
export class TodoListModule { }