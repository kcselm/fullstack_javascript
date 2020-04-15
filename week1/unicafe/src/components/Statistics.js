import React from 'react'
import { Statistic } from './Statistic'

export const Statistics = (props) => {
  if (props.allClicks === 0) {
    return <p>No Feedback Given</p>
  }

  return (
    <>
      <h2>Statistics</h2>
      <table>
        <tbody>    
          <tr><Statistic text="good" value={props.good}/></tr>
          <tr><Statistic text="neutral" value={props.neutral}/></tr>
          <tr><Statistic text="bad" value={props.bad}/></tr>
          <tr><Statistic text="all" value={props.allClicks}/></tr>
          <tr><Statistic text="average" value={props.average}/></tr>
          <tr><Statistic text="positive" value={props.positive} endSymbol="%"/></tr>
        </tbody>
      </table>
    </>
  )
}
