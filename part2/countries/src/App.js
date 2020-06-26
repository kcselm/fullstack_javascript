import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios'

const App = () => {

  const [searchTerm, setSearchTerm] = useState('')
  const [countries, setCountries] = useState([])

  const handleSearchTerm = e => {
    e.preventDefault()
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${searchTerm}`)
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
      })
      .catch(error => console.log(error))
  }, [searchTerm])

  const controlOutput = countries => {
    if (countries.length >= 10) {
      return <p>Too many matches, specify another filter</p> 
    } else if (countries.length === 1) {
      return (
       countries.map(country => 
        <div>
          <h3>{country.name}</h3>
          <ul>capital: {country.capital} </ul>
          <ul>population: {country.population}</ul>
          <h3>Languages</h3>
          {country.languages.map(language => 
            <li key={language.name}>{language.name}</li>
          )}
          <img src={country.flag}></img>
        </div>
        )
      )
    } else {
      return (
        countries.map(country => 
          <ul key={country.numericCode}>{country.name} </ul>
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
