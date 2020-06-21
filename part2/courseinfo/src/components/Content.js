import React from 'react'
import { Part } from './Part'

export const Content = ({ course }) => {
  console.log('from content: {course}', course[1].parts)
  return (
    <div>
      {course.map((part) => 
        <Part key={part.id} part={part}/> 
      )}
    </div>
  )
}
