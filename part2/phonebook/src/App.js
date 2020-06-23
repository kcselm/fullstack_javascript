import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [ persons, setPersons ] = useState([
    {
      name: 'Arto Hellas',
      id: 1
     }
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNameChange = e => {
    setNewName(e.target.value)
  }
  
  const addPerson = e => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      id: persons.length + 1, 
    }
    const names = persons.map(person => person.name)
    console.log(names)

    if (names.includes(newName)) {
      alert(`${newName} is already added`)
      setNewName('')
    } else {
      console.log('persons', persons)
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <ul key={person.id}>{person.name}</ul>)}
    </div>
  )
}

export default App;
