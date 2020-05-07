import React from 'react';
import ReactDOM from 'react-dom';

import { Course } from './components/Course'


const Total = ({ course }) => {
  const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  return(
    <p>Number of exercises {sum}</p>
  ) 
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Course course={course}/>
      {/* <Header course={course} />
      <Content course={course} />
      <Total course={course} /> */}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))