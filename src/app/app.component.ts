import { Component, Directive } from '@angular/core';

@Component({
    templateUrl: './app.component.html',
    selector: 'app-root',
})
export class AppComponent {
    public name = 'Todo Application with Angular 9'
    constructor() {

    }
}


@Directive({
  selector: 'div[turnRedLength]',
})
export class TurnRedLengthDirective {
    constructor(){ 
        console.log('directive is ready!!')
    }
}