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
            title: 'please input something',
            isCompleted: true,
        },
        {
            title: 'empty',
            isCompleted: false,
        },
    ]

    add(title: string) {
        this.todoList.push({
            title: title,
            isCompleted: false,
        });
    }

    updateIsCheck(idx: number, isChecked: boolean) {
        this.todoList[idx].isCompleted = isChecked;
    }

    removeTask(idx: number) {
        this.todoList = this.todoList.filter((v, i) => {
            return i !== idx
        })
    }

    removeCompleted() {
        this.todoList = this.todoList.filter((v) => {
            return !v.isCompleted
        })
    }

    markCompletedAll() {
        let isMarked = this.todoList.every(v => v.isCompleted === true)
        console.log(isMarked)
        this.todoList.forEach(v => v.isCompleted = !isMarked)
    }

}