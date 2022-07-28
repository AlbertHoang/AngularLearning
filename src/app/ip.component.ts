import { Component, OnInit } from '@angular/core';
import { IpService } from './ip.service';


@Component({
  selector: 'app-ip',
  template: '<h3>{{ ip }}</h3>',
})
export class IpComponent implements OnInit{
    ip: any;
    constructor(private ipService: IpService) { }
    ngOnInit(): void {
        this.ipService.getIp()
        .subscribe(data => {
            this.ip = data.ip;
        });
    }
}
