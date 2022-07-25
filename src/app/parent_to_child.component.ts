import {Component, ViewChild} from '@angular/core'
import { Child1Component } from './child_1.component'

@Component({
    selector: 'app-parent-to-child',
    template: `
    <h3>Parent to child component!</h3>
    <button (click)="onAddForChild()">Add to child 1</button>
    <app-child-1></app-child-1>
    `
})

export class ParentToChildComponent {

    @ViewChild(Child1Component) myChild: any;

    onAddForChild() {
        this.myChild.value++;
    }
}
