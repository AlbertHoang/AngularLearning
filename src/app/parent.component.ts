import  {Component} from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `<h3>
        {{value}}
        <br>
        <app-child></app-child>
        </h3>`
})

export class ParentComponent {
    value = 0;
}
