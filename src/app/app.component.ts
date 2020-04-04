import { Component } from '@angular/core';
import { TodoStoreService } from './todo-store.service';

@Component({
    template: `
        <div>Todo Input</div>
    `,
    selector: 'app-todo-input'
})
export class TodoInputComponent {

}

@Component({
    template: ``,
    selector: 'app-todo-list'
})
export class TodoListComponent {
    constructor(
        todoStoreService: TodoStoreService,
    ) {
        console.log(todoStoreService.todoList)
    }
}


@Component({
    template: `
        <div>
            {{name}}
        </div>
        <app-todo-input></app-todo-input>
        <app-todo-list></app-todo-list>
    `,
    selector: 'app-root',
})
export class AppComponent { 
    public name = 'Todo Application with Angular 9'
}