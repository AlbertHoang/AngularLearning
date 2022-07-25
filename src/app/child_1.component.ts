import { Component } from "@angular/core";

@Component({
    selector: 'app-child-1',
    template: `<h3>{{value}}</h3>`
})

export class Child1Component {
    value = 0;
}


