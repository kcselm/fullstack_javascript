import React from 'react'

export const Total = ({ course }) => {
  // const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  console.log('course', course)
  const total = course.reduce((sum, exercise) => {
    console.log('sum', sum)
    console.log('exercise', exercise)
    console.log('exercise.parts', exercise.parts)
    console.log('exercise.parts.exercises', exercise.parts.exercises)
    return sum + exercise.parts.exercises
  }, 0)
   return (
    <h4>total of {total} exercises</h4>
  ) 
}