import { Component } from "@angular/core";
import { SignInService } from './sign-in.service';

@Component({
    selector: 'app-sign-in',
    template: `
        <form (submit)="onSubmit(formSignIn);" #formSignIn="ngForm">
            <h3>Sign In Component</h3>
            <input placeholder="Email" ngModel #txtEmail="ngModel" name="email" required email>
            <p *ngIf="txtEmail.touched && txtEmail.errors?.['required']">Email is required</p>
            <p *ngIf="txtEmail.touched && txtEmail.errors?.['email']">Email is not valid</p>
            <br><br>
            <input type="password"
            placeholder="Password"
            ngModel
            name="password"
            #txtPassword="ngModel"
            minlength="6"
            pattern="[a-z]*"
            >
            <br><br>
            <div ngModelGroup="subjects">
            <label><input type="checkbox" [ngModel]="false" name="NodeJS"> NodeJS</label>
            <label><input type="checkbox" [ngModel]="false" name="Angular"> Angular</label>
            <label><input type="checkbox" [ngModel]="false" name="ReactJS"> ReactJS</label>
            </div>
            <button [disabled]="formSignIn.invalid">Submit</button>
            <button >Post to Server</button>
        <form>
        <p>{{ txtPassword.errors | json }}</p>
        <p>{{ formSignIn.value | json }}</p>
    `,
    providers: [SignInService]
})

export class SignInComponent {

    constructor(private signInService: SignInService) {}

    onSubmit(formSignIn:any){
        this.signInService.sendPost(formSignIn.value).subscribe(
            data => { console.log(data);
            });

    }

    // postToExpress(){
    //     const url = 'http://localhost:3000/signin';
    //     const headers = new HttpHeaders({'Content-Type':'application/json'});
    //     const body = JSON.stringify({name: 'Albert Hoang'});

    //     this.httpClient.post(url, body, {headers}).subscribe(
    //         data => {console.log(data);
    //         });
    // }
}
