import { Injectable } from '@angular/core';


export interface TodoEntity {
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
        {
            title: 'Take a shower',
            isCompleted: true
        },
    ];

    add(title: string) {
        this.todoList.push({
            isCompleted: false,
            title: title,
        });
    }

    updateIsChecked(updatedIndex: number, isChecked: boolean) {
        this.todoList[updatedIndex].isCompleted = isChecked;
    }

}