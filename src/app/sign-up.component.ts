import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms"

@Component({
    selector: 'app-sign-up',
    template: `
        <form (ngSubmit)="onSubmit();" [formGroup]="formSignUp">
            <h3>Sign Up Component</h3>
            <input placeholder="Email" formControlName="email">
            <p *ngIf="formSignUp.controls['email'].invalid && formSignUp.controls['email'].touched">Email is required</p>
            <br><br>
            <input type="password" placeholder="Password" formControlName="password">
            <br><br>
            <div formGroupName="subject">
            <label><input type="checkbox" name="NodeJS" formControlName="nodeJS"> NodeJS</label>
            <label><input type="checkbox" name="Angular" formControlName="angular"> Angular</label>
            <label><input type="checkbox" name="ReactJS" formControlName="reactJS"> ReactJS</label>
            </div>
            <br><br>
            <button [disabled]="formSignUp.invalid">Submit</button>
        <form>
        <code>{{ formSignUp.controls['email'].errors | json}}</code>
    `
})

export class SignUpComponent implements OnInit {

    formSignUp!: FormGroup;

    constructor(private fb: FormBuilder){}

    ngOnInit(): void {
        this.formSignUp = this.fb.group({
            email: ['', [Validators.email, gmailValidator]],
            password: '',
            subject: this.fb.group({
                nodeJS: false,
                angular: true,
                reactJS: false
            })
        });
    }

    onSubmit(){
        console.log(this.formSignUp);
    }
}
function gmailValidator(formControl: FormControl){
    if (formControl.value.includes('@gmail.com')){
        return null;
    }
    return { gmail: true };
}
