import React from 'react'

export const Statistic = (props) => {
  return (
    <>
      <p>{props.text} {props.value}{props.endSymbol}</p>
    </>
  )
}
