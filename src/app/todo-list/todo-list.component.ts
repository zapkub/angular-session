import { Component } from '@angular/core'
import { TodoStoreService, TodoEntity } from './todo-store.service';

@Component({
    template: `
        <ul>
            <li aria-label="item" *ngFor="let todo of todoList; let i = index">
                <app-todo-item-completed-input-checkbox 
                    (check)="handleCheck(i ,$event)"
                    [isChecked]='todo.isCompleted'>
                </app-todo-item-completed-input-checkbox>

                <span *ngIf="todo.isCompleted" style="text-decoration: line-through;">
                    {{ todo.title }}
                </span>
                <span *ngIf="!todo.isCompleted">
                    {{ todo.title }}
                </span>

            </li>
        </ul>
    `,
    selector: 'app-todo-list'
})
export class TodoListComponent {

    time = 0;
    public get todoList(): TodoEntity[] {
        return this.todoStoreService.todoList;
    }

    constructor(
        public todoStoreService: TodoStoreService,
    ) { }

    handleCheck(idx: number, $event: boolean){
        this.todoStoreService.updateIsChecked(idx, $event);
    }

}