import React from 'react'

export const Search = props => {

  console.log('props', props)
  return (
    <div>
      Name Search: <input value={props.searchTerm} onChange={props.onChange}/>
    </div>
  )
}
