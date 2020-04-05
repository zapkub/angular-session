import { Component, ViewChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { TodoStoreService, TodoEntity } from './todo-store.service';

@Component(
    {
        template: `
            <input
                #todoTitleInputElement
                (keydown.enter)="handleKeyPress()"
                placeholder="type it gentlemen....."/>
            `,
        selector: 'app-todo-input',
    }

)
export class TodoInputComponent {
    @ViewChild('todoTitleInputElement')
    todoTitleInputElement: ElementRef<HTMLInputElement>
    value: string = ""
    handleKeyPress() {
        const todoTitle = this.todoTitleInputElement.nativeElement.value
        this.todoStoreService.add(todoTitle)
        this.todoTitleInputElement.nativeElement.value = ""
    }


    constructor(
        private todoStoreService: TodoStoreService
    ) { }
}



@Component({
    template: `<button (click) = "handleClick($event)">
        <ng-content></ng-content>
    </button>`,
    selector: 'app-todo-button',
})

export class todoButtonComponent {
    @Output()
    click = new EventEmitter()


    handleClick($event) {
        $event.stopPropagation()
        this.click.next()
    }
}

@Component({
    template: `
            <input 
                type="checkbox" 
                [checked]="isChecked"
                (click)='handleClick()'/>

    `,
    selector: 'app-todo-checkbox'
})
export class todoCheckBoxComponent {
    @Input()
    isChecked = false

    @Output()
    check = new EventEmitter<boolean>()


    handleClick() {
        this.check.next(!this.isChecked)
    }
}
@Component({
    template: `
    <ul>
        <li aria-label="item" *ngFor="let todo of todoList, let idx = index">
            <app-todo-checkbox 
                (check)="handleCheck(idx,$event)"
                [isChecked]='todo.isCompleted'
            ></app-todo-checkbox>
            <span *ngIf="todo.isCompleted" style="text-decoration: line-through;">
                {{todo.title}}
            </span>
            <span *ngIf="!todo.isCompleted">
                {{todo.title}}
            </span>
            <app-todo-button (click) = "handleRemove(idx)">X</app-todo-button>
        </li>
    </ul>
    `,
    selector: 'app-todo-list',
})
export class TodoListComponent {
    @Input()
    statusFilter = ""

    get todoList(): TodoEntity[] {
        if (this.statusFilter === "") {
            return this.todoStoreService.todoList
        } else {
            return this.todoStoreService.todoList.filter(v => {
                return v.isCompleted !== (this.statusFilter === "DONE")
            })
        }
    }
    handleCheck(index: number, $event: boolean) {
        this.todoStoreService.updateIsCheck(index, $event);
    }
    handleRemove(index: number) {
        this.todoStoreService.removeTask(index)
    }

    constructor(
        private todoStoreService: TodoStoreService,
    ) {
    }
}
@Component({
    templateUrl: './app.component.html',
    selector: 'app-root',
})
export class AppComponent {
    public name = 'Todo Application with A9'

    get len(): number {
        return this.todoStoreService.todoList.length
    }

    get uncompletedAmount(): number {
        return this.todoStoreService.todoList.filter(v => !v.isCompleted).length
    }

    handleRemoveCompleted() {
        this.todoStoreService.removeCompleted()
    }

    statusFilter = ""

    handleSetFilter(statusFilter: string) {
        this.statusFilter = statusFilter
    }

    handleMarkAll() {
        this.todoStoreService.markCompletedAll()
    }


    constructor(
        private todoStoreService: TodoStoreService
    ) { }

}