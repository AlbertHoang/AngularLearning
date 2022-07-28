import { Component } from '@angular/core';
import { IpService } from './ip.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ip',
  template: '<h3>{{ ip }}</h3>',
  providers: [IpService]
})
export class IpComponent{
    ip: any;
    constructor(private ipService: IpService) {
        this.ipService.getIp()
        .subscribe(data => {
            this.ip = data.ip;
        });
    }
    ngOnInit(): void {}
}
