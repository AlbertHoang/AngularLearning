import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {
  birthday = new Date(2022, 7, 25);
  person = {name: 'Albert', age: 28};
  address = Promise.resolve("6 O'Connell St");

  constructor() { }

  ngOnInit(): void {
  }

}
