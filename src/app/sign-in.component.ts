import { Component } from "@angular/core";

@Component({
    selector: 'app-sign-in',
    template: `
        <h3>Sign In Component</h3>
        <input placeholder="Email">
        <br><br>
        <input type="password" placeholder="Password">
        <br><br>
        <button>Submit</button>
    `
})

export class SignInComponent {}
