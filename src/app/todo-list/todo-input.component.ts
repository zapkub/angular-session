import { Component, ViewChild, ElementRef } from '@angular/core';
import { TodoStoreService } from './todo-store.service';

@Component({
    template: `
        <input 
            #todoTitleInputElement
            (keydown.enter)="handleKeypress()" 
            placeholder="type something...." 
        />
    `,
    selector: 'app-todo-input'
})
export class TodoInputComponent {


    @ViewChild('todoTitleInputElement')
    todoTitleInputElement: ElementRef<HTMLInputElement>

    handleKeypress() {
        const todoTitle = this.todoTitleInputElement.nativeElement.value
        this.todoStoreService.add(todoTitle);
        this.todoTitleInputElement.nativeElement.value = ""
    }

    constructor(
        private todoStoreService: TodoStoreService,
    ) { }
}

