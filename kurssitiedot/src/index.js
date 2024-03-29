import React from 'react'
import ReactDOM from 'react-dom'

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
         <Header header={course.name} />
         <Content parts={course.parts} />
         <Total parts={course.parts} />
      </div>
   )
}

const Header = (props) => {
   return (
      <h1>{props.header}</h1>
   )
}

const Content = (props) => {
   const parts = props.parts
   return (
      <>
         <Part part={parts[0]} />
         <Part part={parts[1]} />
         <Part part={parts[2]}  />
      </>
   )
}

const Part = ({part}) => {
   return (
      <p>{part.name + ' ' + part.exercises}</p>
   )
}

const Total = (props) => {
   const parts = props.parts
   return (
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
   )
}

ReactDOM.render(<App />, document.getElementById('root'))