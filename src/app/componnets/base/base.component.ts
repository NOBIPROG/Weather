import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { WeatherData } from 'src/app/interfaces/weather.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
searchControl!: FormControl;
  weather?: WeatherData;
  cityName:string = 'Budapest'
constructor(private apiService:ApiService){}

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = ' '
  }

  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = ' '

  }

  private getWeatherData(cityName:string) {
    this.apiService.getWeather(cityName).subscribe( {
      next: (response) => {this.weather = response;
      console.log(response)}
    });
  }


}
