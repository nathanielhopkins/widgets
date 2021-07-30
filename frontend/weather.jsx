import React from 'react';

export default class Weather extends React.Component {
  constructor(props) {
    super(props)
    
    this.apiKey = '44c786ec5bdf4f23b852fd62061e29aa'
    this.getWeather = this.getWeather.bind(this);
    this.updateWeather = this.updateWeather.bind(this);
    this.parseWeather = this.parseWeather.bind(this);

    this.state = {
      weather: <p className='weather-loading'>Loading current weather...</p>
    };
  }
 
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((location) => this.getWeather(location));
  }

  getWeather(location) {
    let req = new XMLHttpRequest();

    req.onreadystatechange = function () {
      if (req.readyState == XMLHttpRequest.DONE) {
        if (req.status == 200) {
          let res = req.responseText;
          this.updateWeather(res)
        }
        else if (req.status == 400) {
          alert('There was an error 400');
        }
        else {
          alert('something else other than 200 was returned');
        }
      }
    }.bind(this);
    let lat = location.coords.latitude;
    let long = location.coords.longitude;
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=` + lat + '&lon=' + long + `&appid=` + this.apiKey + '&units=imperial';
    req.open("GET", url, true);
    req.send();
  }

  parseWeather(weather) {
    let imgURL = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    return (
      <div className="weather-data">
        <div className="weather-data-description">
          <p><strong>Location: </strong>{weather.name}</p>
          <p><strong>Temp: </strong>{weather.main.temp}F</p>
          <p><strong>Description: </strong>{weather.weather[0].description}</p>
        </div>
        <img src={imgURL} className="weather-img"/>
      </div>
    )
  }

  updateWeather(res) {
    let weather = JSON.parse(res);
  
    this.setState({weather: this.parseWeather(weather)});
  }

  render() {
    return(
      <div>
        <h1>Weather</h1>
        <div className="weather">
          {this.state.weather}
        </div>
      </div>
    );
  }
}