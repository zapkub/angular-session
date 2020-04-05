import { Component, Directive, HostBinding, Input, AfterViewInit, Host, ElementRef, HostListener } from '@angular/core'
import { TodoStoreService, TodoEntity } from './todo-store.service';

@Directive({
    selector: 'span[todoListLinethrough]'
})
export class TodoListLinethroughDirective {

    @Input('todoListLinethrough') set todoListLinethrough(value: boolean) {
        if (value) {
            console.log('mark as completed')
            this.style = "text-decoration: line-through;"
        } else {
            console.log('mark as incompleted')
            this.style = "text-decoration: none;"
        }
    }
    @HostBinding('style') style = ''

    @HostListener('click')
    handleClick() {
        console.log('click!!')
    }

}

@Component({
    template: `
        <ul>
            <li aria-label="item" *ngFor="let todo of todoList; let i = index">
                <app-todo-item-completed-input-checkbox 
                    (check)="handleCheck(i ,$event)"
                    [isChecked]='todo.isCompleted'>
                </app-todo-item-completed-input-checkbox>

                <span [todoListLinethrough]="todo.isCompleted">
                    {{ todo.title }}
                </span>

            </li>
        </ul>
    `,
    selector: 'app-todo-list'
})
export class TodoListComponent {
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