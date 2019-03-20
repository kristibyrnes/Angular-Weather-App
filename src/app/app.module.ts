import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WeatherComponent } from './weather/weather-container.component';
import { WeatherCardComponent } from './weather/weather-card.component';
import { WeatherDetailsComponent } from './weather/weather-details/weather-details.component';
import { CityService } from './weather/shared/city.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WeatherComponent,
    WeatherCardComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
