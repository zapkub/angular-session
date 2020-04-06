import { Component } from '@angular/core';
import { TodoStoreService } from './todo-store.service';


@Component({
    selector: 'app-todo-action',
    template: `
    <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
        <button>Clear Completed</button>
    </div>
    <hr />
    <div>
        <button (click)="handleSave()">Save</button>
    </div>
    `, 
})
export class TodoActionComponent {

    constructor(
        private todoStore: TodoStoreService
    ) { }
    handleSave() {
        this.todoStore.save()
    }
}