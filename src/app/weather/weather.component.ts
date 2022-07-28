import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  txtCityName = '';
  cityName = '';
  temp = null;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  getWeather(){
    this.weatherService.getTemp(this.txtCityName)
    .subscribe(data => {
        // console.log(data.main.temp));
        this.cityName = this.txtCityName;
        this.temp = data.main.temp;
    })
  }

}
