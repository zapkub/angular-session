import { Component } from '@angular/core';

@Component({
    template: `
        <div>Todo Input</div>
    `,
    selector: 'app-todo-input'
})
export class TodoInputComponent {

}

@Component({
    template: `
        <div>
            {{name}}
        </div>
        <app-todo-input></app-todo-input>
    `,
    selector: 'app-root',
})
export class AppComponent { 
    public name = 'Todo Application with Angular 9'
}