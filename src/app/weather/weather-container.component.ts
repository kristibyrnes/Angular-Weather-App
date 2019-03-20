import { Component, OnInit } from '@angular/core';
import { CityService } from './shared/city.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherContainer implements OnInit {
  cities: any[]
  constructor(private cityService: CityService) {

  }

  ngOnInit() {
    this.cities = this.cityService.getCities()
  }

}
