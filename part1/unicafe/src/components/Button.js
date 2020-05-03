import React from 'react'

export const Button = (props) => {
  return (
    <div className="buttonRow">
        <button onClick={props.onClick}>{props.text}</button>
    </div>
  )
}
