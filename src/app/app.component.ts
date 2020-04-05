import { Component, Directive, HostBinding, Host, ElementRef, OnInit, AfterViewInit, Pipe, PipeTransform } from '@angular/core';



interface Money {
    rawValue: number
}

@Component({
    templateUrl: './app.component.html',
    selector: 'app-root',
})
export class AppComponent {
    public name = 'Todo App'
    public value: Money = {
        rawValue: 10000
    }
    constructor() {

    }
}
