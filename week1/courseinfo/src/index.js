import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => (
  <h1>{course}</h1>
)

const Part = props => (
  <p>{props.partText} {props.partExercise}</p>
)

const Content = props => {
  return (
    <>
    <Part 
      partText={props.part1}
      partExercise={props.exercises1}
    />
    <Part 
      partText={props.part2}
      partExercise={props.exercises2}
    />
    <Part 
      partText={props.part3}
      partExercise={props.exercises3}
    />
    
    </>
  )
}

const Total = props => (
  <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
)


const App = () => {
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content 
      part1={part1}
      part2={part2}
      part3={part3}
      exercises1={exercises1}
      exercises2={exercises2}
      exercises3={exercises3}
      />
      <Total 
      exercises1={exercises1}
      exercises2={exercises2}
      exercises3={exercises3}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))