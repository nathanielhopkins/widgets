import React from 'react';

export default class Weather extends React.Component {
  constructor(props) {
    super(props)
    
    this.apiKey = '44c786ec5bdf4f23b852fd62061e29aa'
    this.getWeather = this.getWeather.bind(this);

  }
 
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((location) => this.getWeather(location));
  }

  getWeather(location) {
    let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
      if (req.readyState == XMLHttpRequest.DONE) {
        if (req.status == 200) {
          console.log(req.responseText);
        }
        else if (req.status == 400) {
          alert('There was an error 400');
        }
        else {
          alert('something else other than 200 was returned');
        }
      }
    };
    let lat = location.coords.latitude;
    let long = location.coords.longitude;
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=` + lat + '&lon=' + long + `&appid=` + this.apiKey + '&units=imperial';
    req.open("GET", url, true);
    req.send();

  }

  render() {
    return(
      <div className="weather">
        <h1>Weather</h1>
      </div>
    );
  }
}