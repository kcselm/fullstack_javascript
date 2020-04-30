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
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content 
      part1={part1.name}
      part2={part2.name}
      part3={part3.name}
      exercises1={part1.exercises}
      exercises2={part2.exercises}
      exercises3={part3.exercises}
      />
      <Total 
      exercises1={part1.exercises}
      exercises2={part2.exercises}
      exercises3={part3.exercises}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))