import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class IpService {
    constructor(private http: HttpClient) {}

    getIp() {
        return this.http.get<any>('http://ip.jsontest.com')
    }
}
