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
      <p>{props.content} {props.age}</p>
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
        <Header name={course} />
        <Content content={part1.name} age={part1.exercises}/>
        <Content content={part2.name} age={part2.exercises}/>
        <Content content={part3.name} age={part3.exercises}/>
        <Total total={part1.exercises+part2.exercises+part3.exercises} />
      </div>
    )
  }
  
  export default App
  
