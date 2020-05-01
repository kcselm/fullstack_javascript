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
      partText={props.parts[0].name}
      partExercise={props.parts[0].exercises}
    />
    <Part 
      partText={props.parts[1].name}
      partExercise={props.parts[1].exercises}
    />
    <Part 
      partText={props.parts[2].name}
      partExercise={props.parts[2].exercises}
    />
    </>
  )
}

const Total = props => {
  // console.log('props', props)
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} 
      // part1={parts[0].name}
      // part2={parts[1].name}
      // part3={parts[2].name}
      // exercises1={parts[0].exercises}
      // exercises2={parts[1].exercises}
      // exercises3={parts[2].exercises}
      />
      <Total parts={parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))