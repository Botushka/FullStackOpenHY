import { useState } from 'react'

const Header = (props) => {
  console.log(props)
    return(
    <h1>{props.name}</h1>
    )
  }
  
  const Content = (props) => {
    console.log(props)
    return(
      <p>{props.name} {props.exercises}</p>
    )
  }
  
  const Total = (props) => {
    console.log(props)
    return(
      <p>Number of exercises {props.total}</p>
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
        <Header name={course} />
        <Content name={parts[0].name} exercises={parts[0].exercises} />
        <Content name={parts[1].name} exercises={parts[1].exercises} />
        <Content name={parts[2].name} exercises={parts[2].exercises} />
        <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
      </div>
    )
  }
  
  export default App
  
