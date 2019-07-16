import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  city = 'Pretoria';
  values: any;
  weatherData: any;
  weatherData1: any;
  cityData: any;
  name : string;

  date: number = Date.now();

  constructor(private service: WeatherService) {

    this.service.getWeather(this.city).subscribe(data =>{
      
      this.values = data;
      this.weatherData = this.values.list;
      this.cityData = this.values.city;
      this.name = this.cityData.name;
 
      console.log(data);
    
    });

    // this.service.getWeather1(this.city).subscribe(data =>{
      
    //   this.values = data;
    //   this.weatherData = this.values.list;
    //   this.cityData = this.values.city;
    //   this.name = this.cityData.name;
 
    //   console.log(data);
    
    // });
  }

  searchCity(){
 
    this.service.getWeather(this.city).subscribe(data =>{
      
      this.values = data;
      this.weatherData = this.values.list;
      this.cityData = this.values.city;
      this.name = this.cityData.name;
 
      console.log(data);
    
    });

    // this.service.getWeather1(this.city).subscribe(data =>{
      
    //   this.values = data;
    //   this.weatherData1 = this.values.list;
    //   this.cityData = this.values.city;
    //   this.name = this.cityData.name;
 
    //   console.log(data);
    
    // });
  }

  

  }
