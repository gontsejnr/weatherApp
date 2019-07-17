import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  appid = 'c95f46564f1fc73ef1469f8610cf75ee';
 

  constructor(private http: HttpClient) { }


  getWeather(city){

    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID=' + this.appid);

  }
}
