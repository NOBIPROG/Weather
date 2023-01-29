import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, Observable } from 'rxjs';
import { Main, WeatherData } from '../interfaces/weather.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getWeather(city: string): Observable<WeatherData>{
  const url ='https://api.openweathermap.org/data/2.5/weather?appid=ff14daea384c56cf2f161454c01ef2cc&units=metric&q='+city
    return  this.httpClient.get<WeatherData>(url).pipe(map(response => response))
  }
}
