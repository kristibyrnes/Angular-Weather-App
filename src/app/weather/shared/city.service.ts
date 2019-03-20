import { Injectable } from '@angular/core'

@Injectable()
export class CityService {
  getCities() {
    return CITIES
  }
    
    getCity(id:number){
      return CITIES.find( city => city.id === id)
    }
}

const CITIES = [
  {
    id: 1,
    coord: { "lon": 1, "lat": 35 },
    name: "Shuzenji",
    weather: {
      description: "overcast clouds"
    },
    main: {
      temp: 285.514,
      humidity: 100
    }
  },
  {
    id: 2,
    coord: { "lon": 2, "lat": 35 },
    name: "Chicago",
    weather: {
      description: "sunny"
    },
    main: {
      temp: 285.514,
      humidity: 100
    }
  },
  {
    id: 3,
    coord: { "lon": 3, "lat": 35 },
    name: "Detroit",
    weather: {
      description: "snow"
    },
    main: {
      temp: 285.514,
    }
  },
  {
    id: 4,
    coord: { "lon": 4, "lat": 35 },
    name: "Miami",
    weather: {
      description: "rainy"
    },
    main: {
      temp: 285.514,
    }
  },
  {
    id: 5,
    coord: { "lon": 5, "lat": 35 },
    name: "San Franciso",
    weather: {
      description: "partly cloudy"
    },
    main: {
      temp: 285.514,
    }
  }
]