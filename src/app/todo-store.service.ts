import { Injectable } from '@angular/core';
import { TodoListComponent } from './app.component';


interface TodoEntity {
    title: string
    isCompleted: boolean 
}

@Injectable({
    providedIn: null,
})
export class TodoStoreService {

    todoList: TodoEntity[] = [
        {
            title: 'Finish the task',
            isCompleted: false
        },
    ];

}