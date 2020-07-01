import React, { useState, useEffect } from 'react';
import './App.css';

import personService from './services/persons'

import { DisplayPeople } from './components/DisplayPeople'
import { Search } from './components/Search'
import { Form } from './components/Form'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ searchTerm, setSearch ]  = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  useEffect(() => {
    personService.getPersons()
    .then(response => {
      console.log(response.data)
      setPersons(response.data)
    })
    .catch(error => console.log(error))
  }, [])

  const handleSearchChange = e => {
    setSearch(e.target.value)
  }

  const handleNameChange = e => {
    setNewName(e.target.value)
  }

  const handleNumberChange = e => {
    setNewNumber(e.target.value)
  } 

  const addPerson = e => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1, 
    }
    const names = persons.map(person => person.name)
    console.log(names)

    if (names.includes(newName)) {
      alert(`${newName} is already added`)
      setNewName('')
    } else {
      console.log('persons', persons)
      personService.addPerson(newPerson)
        .then(response => {
          setPersons(persons.concat(newPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Search searchTerm={searchTerm} onChange={handleSearchChange}/>
        {/* Name Search: <input value={searchTerm} onChange={handleSearchChange}/> */}
      </div>
      <h2>Add New Record</h2>
      <Form 
      addPerson={addPerson}
      handleNameChange={handleNameChange}
      handleNumberChange={handleNumberChange}
      newName={newName}
      newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <DisplayPeople persons={persons} searchTerm={searchTerm}/>
    </div>
  )
}

export default App;
