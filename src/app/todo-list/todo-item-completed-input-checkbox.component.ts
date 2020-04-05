import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    template: `
        <input type="checkbox" [checked]="isChecked" (click)='handleClick()' />
    `,
    selector: 'app-todo-item-completed-input-checkbox'
})
export class TodoItemCompletedInputCheckboxComponent {

    @Input()
    isChecked = false;

    @Output()
    check = new EventEmitter<boolean>();

    handleClick(){
        this.check.next(!this.isChecked)
    }
}