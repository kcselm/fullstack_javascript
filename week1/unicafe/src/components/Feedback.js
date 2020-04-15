import React, { useState } from 'react'
import { Statistics } from './Statistics'

export const Feedback = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
    
  const goodClick = () => {
    setGood(good + 1)
    console.log("good clicked", good)
   }

   const mehClick = () => {
    setNeutral(neutral + 1)
    console.log("neutral clicked")
   }

   const badClick = () => {
    setBad(bad + 1)
    console.log("bad clicked")
   }

  let allClicks = good + neutral + bad

  let average = (good - bad) / allClicks
  if (isNaN(average)) {average = 0}

  let positive = (good / allClicks) * 100
  if (isNaN(positive)) {positive = 0}

  return (
    <div>
      <h2>Give Feedback</h2>
      <button onClick={goodClick}>good</button> 
      <button onClick={mehClick}>neutral</button>
      <button onClick={badClick}>bad</button>
      <br />
      <br />
      <Statistics 
      good={good} 
      neutral={neutral} 
      bad={bad}
      allClicks={allClicks}
      average={average}
      positive={positive}/>
    </div>
  )
}
