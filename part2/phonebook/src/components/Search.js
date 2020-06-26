import React from 'react'

export const Search = props => {
  return (
    <div>
      Name Search: <input value={props.searchTerm} onChange={props.onChange}/>
    </div>
  )
}
