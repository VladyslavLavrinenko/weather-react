import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY ='fa9568c87b68f9f5981cdd69a857cf95'

class App extends React.Component {
  
  state = {
    temp: undefined,
    city: undefined,
    country: undefined, 
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  }
  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value
    
    
    if (city) {
      const api_url = await 
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      const data = await api_url.json();
      
   
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunsete,
        error: undefined
      })
   
    }
    else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined, 
        sunrise: undefined,
        sunset: undefined,
        error: 'Enter city name'
      })
    }
  }

  render() {
    return (
      <div className='wrapper'>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather
        temp={this.state.temp}
        city={this.state.city}
        country={this.state.country}
        sunrise={this.state.sunrise}
        sunset={this.state.sunset}
        error={this.state.error}
        />
      </div>
    )
  }
}


export default App;