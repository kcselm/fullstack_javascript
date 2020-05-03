import React from 'react'

export const Statistic = (props) => {
  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}{props.endSymbol}</td>
    </>
  )
}
