import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
    {name: 'Albert', age: 25},
    {name: 'Huy', age: 28},
    {name: 'Hoang', age: 28}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
