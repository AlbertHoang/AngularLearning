import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-ip',
  template: '<h3>Ip Component</h3>'
})
export class IpComponent {
    constructor(private http: HttpClient){
        this.http.get('http://ip.jsontest.com/')
        .toPromise()
        .then(resJson => console.log(resJson))
        .catch(err => console.log(err));
    }

}
