import React from 'react'

// import personService from '../services/persons'

export const DisplayPeople = props => {
  // console.log("props", props)

  return (
    <div>
      <div className="person">
        <ul >{props.person.name}  {props.person.number}</ul>
        <button className="deleteBtn" onClick={() => props.deletePerson(props.person.id)}>Delete</button>
      </div>
    </div>
  )
}
