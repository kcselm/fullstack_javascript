import React from 'react'

export const Statistics = (props) => {
  if (props.allClicks === 0) {
    return <p>No Feedback Given</p>
  }

  return (
    <div>
      <h2>Statistics</h2>
      <p>good {props.good}</p>
      <p>neutal {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.allClicks}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}%</p>
    </div>
  )
}
