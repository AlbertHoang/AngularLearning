import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class WeatherService {
    constructor(private http: HttpClient){}

    getTemp(cityName: string) {
        const url = 'https://api.openweathermap.org/data/2.5/weather?appid=2cb2fbdf8044e79e6b50233446fbecac&units=metric&q=' + cityName;
        return this.http.get<any>(url);
    }
}
