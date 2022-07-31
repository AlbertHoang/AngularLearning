import { Component } from "@angular/core";

@Component({
    selector: 'app-sign-in',
    template: `
        <form (submit)="onSubmit(formSignIn);" #formSignIn="ngForm">
            <h3>Sign In Component</h3>
            <input placeholder="Email" [(ngModel)]="email" name="email" required>
            <p *ngIf="formSignIn.controls['email'].errors?.['required']">Email is required</p>
            <br><br>
            <input type="password" placeholder="Password" [(ngModel)]="password" name="password">
            <br><br>
            <button [disabled]="formSignIn.invalid">Submit</button>
        <form>
    `
})

export class SignInComponent {
    email = '';
    password = '';
    onSubmit(formSignIn:any){
        console.log(formSignIn);
        console.log(formSignIn.value);
    }
}
