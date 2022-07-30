import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

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
    isLoading = false;

    constructor(private weatherService: WeatherService) { }

    ngOnInit(): void { }

    getWeather() {
        this.isLoading = true;
        this.weatherService.getTemp(this.txtCityName)
            .subscribe(
                data => {
                    // console.log(data.main.temp));
                    this.cityName = this.txtCityName;
                    this.temp = data.main.temp;
                    this.isLoading = false;
                }, error => {
                    console.log(error);
                    alert('Cannot find your city!');
                    this.isLoading = false;
                    this.cityName = '';
                    this.txtCityName = '';
                }
            );
    }

    getMessage() {
        if(this.isLoading){
            return 'Loading...'
        }
        return this.cityName === '' ? "Enter your city name" : (this.cityName + ' is now ' + this.temp);
    }

}
