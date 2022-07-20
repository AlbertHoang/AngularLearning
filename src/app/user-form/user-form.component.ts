import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name = '';
  isHighlight = true;
  evenStyle = {color: 'red', fontSize: '40px' };
  oddStyle = {color: 'blue', fontSize: '20px'};
  currentClass = {circle: !this.isHighlight, square: this.isHighlight};
  constructor() { }

  ngOnInit(): void {
  }

  showEvent(event:any){
    this.name = event.target.value;
  }

}
