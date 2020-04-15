import React from 'react'
import { Statistic } from './Statistic'

export const Statistics = (props) => {
  if (props.allClicks === 0) {
    return <p>No Feedback Given</p>
  }

  return (
    <>
      <h2>Statistics</h2>
      <Statistic text="good" value={props.good}/>
      <Statistic text="neutral" value={props.neutral}/>
      <Statistic text="bad" value={props.bad}/>
      <Statistic text="all" value={props.allClicks}/>
      <Statistic text="average" value={props.average}/>
      <Statistic text="positive" value={props.positive} endSymbol="%"/>
    </>
  )
}
