import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios'

const App = () => {

  const api_key = process.env.REACT_APP_API_KEY
  const [searchTerm, setSearchTerm] = useState('')
  const [countries, setCountries] = useState([])
  const [capital, setCapital] = useState('')
  const [weather, setWeather] = useState({})

  const handleSearchTerm = e => {
    e.preventDefault()
    setSearchTerm(e.target.value)
  }

  const handleShowView = country => {
    // setSearchTerm(country)
    // console.log(country)
    setCountries([country])
    // console.log('capital', country.capital)
    setCapital(country.capital)
  }

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${searchTerm}`)
      .then(response => {
        console.log('country data', response.data)
        setCountries(response.data)
      })
      .catch(error => console.log(error))
  }, [searchTerm])

  useEffect(() => {
    let url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`
    console.log('url', url)
    axios
      .get(url)
      .then(response => {
        console.log('weather data', response.data.current)
        setWeather(response.data.current)
        console.log('weather', weather)
      })
      .catch(error => console.log(error))
  }, [capital])

  const countryView = () => {
    if (weather) {
      return (
        countries.map(country => 
        <div key={country.name}>
          <h3>{country.name}</h3>
          <ul>capital: {country.capital} </ul>
          <ul>population: {country.population}</ul>
          <h3>Languages</h3>
          {country.languages.map(language => 
            <li key={language.name}>{language.name}</li>
          )}
          <img src={country.flag}></img>
          <h3>Weather in {capital}</h3>
          <p><strong>teperature: </strong>{weather.temperature} Celcius </p>
          <img src={weather.weather_icons}></img>
          <p><strong>wind: </strong>{weather.wind_speed} mph direction {weather.wind_dir}</p>
        </div>
        )
      )
    }
  }

  const controlOutput = countries => {
    if (countries.length >= 10) {
      return <p>Too many matches, specify another filter</p> 
    } else if (countries.length === 1) {
      return countryView()
    } else {
      return (
        countries.map(country => 
          <div>
            <ul key={country.numericCode}>{country.name}   
              <button onClick={() => handleShowView(country)}>Show</button>
            </ul>
          </div>
        )
      )
    }
  } 

  return (
    <div className="App">
      find countries <input value={searchTerm} onChange={handleSearchTerm}/>
      {controlOutput(countries)}
    </div>
  );
}

export default App;
