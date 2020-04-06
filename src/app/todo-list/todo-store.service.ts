import { Injectable } from '@angular/core';
import { TodoEntity, TodoApiService } from './todo-api.service';

@Injectable({
    providedIn: null,
})
export class TodoStoreService {

    todoList: TodoEntity[] = [];

    add(title: string) {
        this.todoList.push({
            isCompleted: false,
            title: title,
        });

        // save the data to remote here
    }

    updateIsChecked(updatedIndex: number, isChecked: boolean) {
        this.todoList[updatedIndex].isCompleted = isChecked;
    }

    constructor( private todoApi: TodoApiService ) {}


    /**
     * Integrate with the
     * remote service to permanently
     * save the todo list data
     */

     save() {
        const saveTodo$ = this.todoApi.save(this.todoList);       
        saveTodo$.subscribe((data) => {
            alert('Server response: ' + data.message)
        })
     }

     reload() {
        const getTodo$ = this.todoApi.get()
        getTodo$.subscribe(data => {
            this.todoList = data
        })
    }

}