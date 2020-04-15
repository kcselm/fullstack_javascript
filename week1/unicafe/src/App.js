import React, { useState } from 'react';
import './App.css';

import { Statistics } from './components/Statistics'
import { Button } from './components/Button'


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
    

  const goodClick = () => {
    setGood(good + 1)
  }

   const mehClick = () => {
    setNeutral(neutral + 1)
   }

   const badClick = () => {
    setBad(bad + 1)
   }

  let allClicks = good + neutral + bad

  let average = (good - bad) / allClicks
  if (isNaN(average)) {average = 0}

  let positive = (good / allClicks) * 100
  if (isNaN(positive)) {positive = 0}

  return (
    <div className="App">
      <div>
        <h2>Give Feedback</h2>
        <Button text="good" onClick={goodClick}/>
        <Button text="neutral" onClick={mehClick}/>
        <Button text="bad" onClick={badClick}/>
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
    </div>
  );
}

export default App;
