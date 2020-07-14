import React, { useState, useEffect } from 'react';
import './App.css';

import personService from './services/persons'

import { DisplayPeople } from './components/DisplayPeople'
import { Search } from './components/Search'
import { Form } from './components/Form'
import { Notification } from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ searchTerm, setSearch ]  = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ status, setStatus ] = useState('')

  useEffect(() => {
    personService.getPersons()
    .then(response => {
      console.log("persons", response.data)
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
      // updatePerson(id, newPerson, newNumber)
      // const personID = persons.filter(person => person.name = newName)
      // const updatedPerson = {...newPerson, number: newNumber}
      // console.log('personID', personID)
      console.log('persons', persons)

      // personService.updateNumber(personID.id, updatedPerson)
      //   .then(response => {
      //     setPersons(persons.map(person => person.id !== newPerson.id ? person : response.data))
      //   })
      alert(`${newName} is already added`)
      setNewName('')
    } else {
      console.log('persons', persons)
      personService.addPerson(newPerson)
        .then(response => {
          setPersons(persons.concat(newPerson))
          setStatus(`${newName} added to the list`)
          setTimeout(() => {
            setStatus('')
           } , 5000)
          setNewName('')
          setNewNumber('')
        })
    }
  }

  // const updatePerson = (id, person, newNumber) => {
  //   const newPerson = {...person, number: newNumber}
  //   personService.updateNumber(id, newPerson)
  //     .then(response => {
  //       console.log("update worked!")
  //     })
  // }

  const deletePerson = id => {
    personService.deletePerson(id)
    console.log('after delete', persons)
    setPersons(persons.filter(person => person.id !== id))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Search searchTerm={searchTerm} onChange={handleSearchChange}/>
        {/* Name Search: <input value={searchTerm} onChange={handleSearchChange}/> */}
      </div>
      <h2>Add New Record</h2>
      <Notification message={status} />
      <Form 
      addPerson={addPerson}
      handleNameChange={handleNameChange}
      handleNumberChange={handleNumberChange}
      newName={newName}
      newNumber={newNumber}
      />
      <h2>Numbers</h2>
      {persons
      .filter(person => person.name.includes(searchTerm))
      .map(person => 
        <DisplayPeople 
          key={person.id}
          person={person} 
          searchTerm={searchTerm} 
          deletePerson={() => deletePerson(person.id)}/> 
        )
      }
    </div>
  )
}

export default App;
