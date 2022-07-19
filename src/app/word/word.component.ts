import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  en = "Hello";
  vn = "Xin chao";
  imageURL = "https://angular.io/assets/images/logos/angular/logo-nav@2x.png"
  constructor() { }

  ngOnInit(): void {
  }

}
