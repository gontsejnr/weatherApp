import { Component } from '@angular/core';
import { WeatherService } from '../service/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  city = 'Pretoria';
  //first api call
  values: any;
  weatherData: any;
  cityData: any;
  name : string;
  txt;

  // //second api call
  // values1: any;
  // weatherData1: any;
  // cityData1: any;
  // name1 : string;

  date: number = Date.now();

  constructor(private service: WeatherService) {

    this.service.getWeather(this.city).subscribe(data =>{
      
      this.values = data;
      this.weatherData = this.values.list;
      this.cityData = this.values.city;
      this.name = this.cityData.name;
    
      if(this.values.list[0].dt_txt = this.date){
        this.txt = "Today"
      }
 
      console.log(data);
    
    });

  }

  searchCity(){
 
    this.service.getWeather(this.city).subscribe(data =>{
      
      this.values = data;
      this.weatherData = this.values.list;
      this.cityData = this.values.city;
      this.name = this.cityData.name;
 
      console.log(data);
    
    });

  }

  

  }
