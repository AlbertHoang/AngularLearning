import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()

export class SignInService {
    constructor(private httpClient: HttpClient) {}

    sendPost(value: any){
        const url = 'http://localhost:3000/signin';
        const headers = new HttpHeaders({'Content-Type':'application/json'});
        const body = JSON.stringify(value);

        return this.httpClient.post(url, body, {headers});
    }
}
