import React, { useState, useEffect } from 'react'
import './App.css'

import personService from './services/persons'

import { DisplayPeople } from './components/DisplayPeople'
import { Search } from './components/Search'
import { Form } from './components/Form'
import { Notification } from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [searchTerm, setSearch] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personService
      .getPersons()
      .then((response) => {
        console.log('persons', response.data)
        setPersons(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const notifyWith = (message, type = 'success') => {
    setNotification({ message, type })
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  const addPerson = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    const names = persons.map((person) => person.name)
    console.log(names)

    const existing = persons.find((p) => p.name === newName)
    console.log('newName', newName)
    console.log('existing', existing)

    // if (names.includes(newName)) {
    if (existing) {
      const ok = window.confirm(
        `${existing.name} already in phonebook, replace the old number with new one?`
      )
      if (ok) {
        personService
          .updateNumber(existing.id, {
            name: existing.name,
            number: newNumber,
          })
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== existing.id ? person : returnedPerson
              )
            )
            notifyWith(`Changed number of ${existing.name}`)
          })
        setNewName('')
        setNewNumber('')
      }
    } else {
      console.log('persons', persons)
      personService.addPerson(newPerson).then((response) => {
        setPersons(persons.concat(newPerson))
        notifyWith(`${newName} added to the list`)
        setNewName('')
        setNewNumber('')
      })
    }
  }

  const deletePerson = (id) => {
    personService.deletePerson(id)
    console.log('after delete', persons)
    setPersons(persons.filter((person) => person.id !== id))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Search searchTerm={searchTerm} onChange={handleSearchChange} />
        {/* Name Search: <input value={searchTerm} onChange={handleSearchChange}/> */}
      </div>
      <h2>Add New Record</h2>
      <Notification notification={notification} />
      <Form
        addPerson={addPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      {persons
        .filter((person) => person.name.includes(searchTerm))
        .map((person) => (
          <DisplayPeople
            key={person.id}
            person={person}
            searchTerm={searchTerm}
            deletePerson={() => deletePerson(person.id)}
          />
        ))}
    </div>
  )
}

export default App
