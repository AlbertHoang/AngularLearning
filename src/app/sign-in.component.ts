import { Component } from "@angular/core";

@Component({
    selector: 'app-sign-in',
    template: `
        <form (submit)="onSubmit(formSignIn);" #formSignIn="ngForm">
            <h3>Sign In Component</h3>
            <input placeholder="Email" ngModel #txtEmail="ngModel" name="email" required email>
            <p *ngIf="txtEmail.touched && txtEmail.errors?.['required']">Email is required</p>
            <p *ngIf="txtEmail.touched && txtEmail.errors?.['email']">Email is not valid</p>
            <br><br>
            <input type="password" placeholder="Password" ngModel name="password">
            <br><br>
            <button [disabled]="formSignIn.invalid">Submit</button>
        <form>

    `
})

export class SignInComponent {

    onSubmit(formSignIn:any){
        console.log(formSignIn);
        console.log(formSignIn.value);
    }
}
