import {Component} from '@angular/core'

@Component({
    selector: 'app-parent-to-child',
    template: `
    <h3>Parent to child component!</h3>
    <button>Add to child 1</button>
    <app-child-1></app-child-1>
    `
})

export class ParentToChildComponent {

}
