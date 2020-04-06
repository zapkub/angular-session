import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'



export interface TodoEntity {
    title: string
    isCompleted: boolean
}

@Injectable({
    providedIn: null,
})
export class TodoApiService {
    constructor(
        private httpClient: HttpClient,
    ) {

    }

    save(todos: TodoEntity[]) {
        // send the data to service
        console.log('post /todos')
        return this.httpClient.post<{message: string}>("http://localhost:3000/todos", todos, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    get() {
        return this.httpClient.get<TodoEntity[]>('http://localhost:3000/todos')
    }
}