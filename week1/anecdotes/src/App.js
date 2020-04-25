import React, { useState } from 'react';
import './App.css';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.' 
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [mostVotes, setMost] = useState(0)

  const randAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const upVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1 
    setVotes(newVotes)
    console.log("newVotes", newVotes)
  
    // let newMostVotes = newvotes.reduce((a, b) => {
    //   return Math.max(a, b)
    // })
    // console.log(newMostVotes)
    
    let newMostVotes = 0
    let i = 0
    for (i; i < newVotes.length; i++) {
      // console.log("newMostVotes before the if", newMostVotes)
      // console.log("newVotes[i] going into if", newVotes[i])
      if (newVotes[i] >= newMostVotes) {

        newMostVotes = i
        console.log("newMostVotes after assignment", newMostVotes)
      }  
      console.log("newMostVotes", newMostVotes)
    }
    setMost(newMostVotes)

    // console.log("newMostVotes", newMostVotes)
    // console.log("i", i)
    // console.log("newVotes", newVotes)
    // console.log("anecdote: ", votes[i])
    // console.log("newVotes[i]", newVotes[i])
  }

  return (
    <div className="App">
      <h3>Anecdote of the Day</h3>
      <p>{anecdotes[selected]}</p>
      <button onClick={randAnecdote}>Next Anecdote</button>
      <button onClick={upVote}>Vote</button>
      <p>Votes Received: {votes[selected]}</p>
      <br />
      <h3>Most Votes: </h3>
      <p>{anecdotes[mostVotes]}</p>
    </div>
  );
}

export default App;
