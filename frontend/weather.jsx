import React from 'react';

export default class Weather extends React.Component {
  constructor(props) {
    super(props)
    
    this.apiKey = '44c786ec5bdf4f23b852fd62061e29aa'
    this.getWeather = this.getWeather.bind(this);
    this.updateWeather = this.updateWeather.bind(this);

    this.state = {
      weather: "Loading current weather..."
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

  updateWeather(res) {
    console.log(res);
  }

  render() {
    return(
      <div>
        <h1>Weather</h1>
        <div className="weather">
          <article>
            <p>{this.state.weather}</p>
          </article>
        </div>
      </div>
    );
  }
}