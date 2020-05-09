import React from 'react'

export const Total = ({ course }) => {
  // const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  const total = course.parts.reduce((sum, exercise) => {
    return sum + exercise.exercises
  }, 0)
   return (
    <h4>total of {total} exercises</h4>
  ) 
}