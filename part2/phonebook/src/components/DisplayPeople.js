import React from 'react'

export const DisplayPeople = props => {
  return (
    <div>
      {props.persons
      .filter(person => person.name.includes(props.searchTerm))
      .map(person =>
        <ul key={person.name}>{person.name}  {person.number}</ul>)}
    </div>
  )
}
