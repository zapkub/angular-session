import { NgModule, Component } from '@angular/core';
import { TodoListComponent, TodoListLinethroughDirective } from './todo-list.component';
import { TodoItemCompletedInputCheckboxComponent } from './todo-item-completed-input-checkbox.component';
import { TodoInputComponent } from './todo-input.component';
import { TodoStoreService } from './todo-store.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TodoApiService } from './todo-api.service';
import { TodoActionComponent } from './todo-action.component';

@Component({
    template: `
        <app-todo-input></app-todo-input>
        <app-todo-list></app-todo-list>
        <app-todo-action></app-todo-action>
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
        TodoListLinethroughDirective,
        TodoActionComponent,
    ],
    providers: [
        TodoStoreService,
        TodoApiService,
    ],

    exports: [
        TodoListComponent,
        TodoInputComponent,
        TodoStandaloneComponent,
    ],

    imports: [
        CommonModule,
        HttpClientModule,
    ]
})
export class TodoListModule { }