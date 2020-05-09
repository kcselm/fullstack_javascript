import React from 'react'
import { Header } from './Header'
import { Content } from './Content'
import { Total } from './Total'

export const Course = (props) => {
  return (
    <div>
        <Header course={props.course} /> 
        <Content course={props.course} />
        <Total course={props.course} />
    </div>
  )
}
